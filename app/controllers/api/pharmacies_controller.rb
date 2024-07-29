module Api
  class PharmaciesController < ApiController
    def index
      @pharmacies = Pharmacy.all

      render json: @pharmacies
    end
  end
end
