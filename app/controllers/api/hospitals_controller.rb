module Api
  class HospitalsController < ApiController
    skip_before_action :verify_authenticity_token

    def index
      @hospitals = Hospital.all.includes(:pharmacies)

      render json: @hospitals.as_json(include: :pharmacies)
    end

    def update
      @hospital = Hospital.where(id: params[:id])

      if @hospital
        @hospital.update!(hospital_params)
        @hospital.reload

        render json: @hospital
      else
        render json: @hospital.errors, status: :unprocessable_entity
      end
    end

    private

    def hospital_params
      params.require(:hospital).permit(pharmacy_ids: [])
    end
  end
end
