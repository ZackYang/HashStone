module Users
  class OmniauthCallbacksController < Devise::OmniauthCallbacksController
    # See https://github.com/omniauth/omniauth/wiki/FAQ#rails-session-is-clobbered-after-callback-on-developer-strategy
    skip_before_action :verify_authenticity_token, only: %i[github failure]

    def github
      class_name = request.env['omniauth.params']['type']

      raise "Invalid user type '#{class_name}'" unless %w[talent employer].include?(class_name)

      klass = class_name.capitalize.constantize

      @user = klass.from_omniauth(request.env['omniauth.auth'])

      if @user.persisted?
        sign_in(@user)

        redirect_to "/#{class_name}"
      else
        session['devise.github_data'] = request.env['omniauth.auth'].except(:extra) # Removing extra as it can overflow some session stores
        redirect_to new_user_registration_url
      end
    end

    def failure
      redirect_to root_path
    end
  end
end
