class CreatePharmacies < ActiveRecord::Migration[7.1]
  def change
    create_table :pharmacies do |t|
      t.string :name

      t.timestamps
    end
  end
end
