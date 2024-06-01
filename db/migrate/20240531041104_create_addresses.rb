class CreateAddresses < ActiveRecord::Migration[7.1]
  def change
    create_table :addresses, id: :uuid, default: -> { 'gen_random_uuid()' } do |t|
      t.references :addressable, polymorphic: true, null: false, type: :uuid
      t.string :type, null: false
      t.string :unit
      t.string :street_one, null: false
      t.string :street_two
      t.string :city, null: false
      t.string :state
      t.string :zip, null: false
      t.string :country, null: false
      t.timestamps
    end
  end
end
