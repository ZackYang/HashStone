class HospitalPharmacy < ApplicationRecord
  belongs_to :hospital
  belongs_to :pharmacy
end
