class Hospital < ApplicationRecord

  has_many :hospital_pharmacies
  has_many :pharmacies, through: :hospital_pharmacies

  def pharmacy_ids=(ids)
    self.pharmacies = ids.map do |id|
      Pharmacy.find(id)
    end
  end
end
