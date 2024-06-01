class CreateExperiences < ActiveRecord::Migration[7.1]
  def change
    create_table :experiences, id: :uuid, default: -> { 'gen_random_uuid()' } do |t|
      t.references :profile, null: false, foreign_key: true, type: :uuid
      t.string :company, null: false
      t.string :position, null: false
      t.integer :start_month, null: false
      t.integer :start_year, null: false
      t.integer :end_month
      t.integer :end_year
      t.boolean :current, default: false
      t.text :description

      t.timestamps
    end
  end
end
