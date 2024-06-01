class CreateEducations < ActiveRecord::Migration[7.1]
  def change
    create_table :educations, id: :uuid, default: -> { 'gen_random_uuid()' } do |t|
      t.references :profile, null: false, foreign_key: true, type: :uuid
      t.string :school, null: false
      t.string :degree, null: false
      t.integer :start_month, null: false
      t.integer :start_year, null: false
      t.integer :end_month, null: false
      t.integer :end_year,  null: false

      t.timestamps
    end
  end
end
