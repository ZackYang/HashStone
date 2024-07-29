class CreateHospitalPharmacies < ActiveRecord::Migration[7.1]
  def change
    create_table :hospital_pharmacies do |t|
      t.references :hospital, null: false, foreign_key: true
      t.references :pharmacy, null: false, foreign_key: true
      t.timestamps
    end
  end
end
