# frozen_string_literal: true

module Users
  class SessionsController < Devise::SessionsController
    respond_to :json
    before_action :configure_sign_in_params, only: [:create]

    # GET /resource/sign_in
    # def new
    #   super
    # end

    # POST /resource/sign_in
    def create
      self.resource = warden.authenticate!(auth_options)
      sign_in(resource_name, resource)

      if current_user
        render json: { success: true, location: '/talent' }
      else
        render json: { success: false }
      end
    end

    # DELETE /resource/sign_out
    # def destroy
    #   super
    # end

    # protected

    # If you have extra params to permit, append them to the sanitizer.
    def configure_sign_in_params
      devise_parameter_sanitizer.permit(:sign_in, keys: %i[email password type])
    end
  end
end
