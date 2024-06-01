class CreateProfileSkills < ActiveRecord::Migration[7.1]
  def change
    create_table :profile_skills, id: :uuid, default: -> { 'gen_random_uuid()' } do |t|
      t.references :profile, null: false, foreign_key: true, type: :uuid
      t.references :skill, null: false, foreign_key: true, type: :uuid
      t.integer :years_of_experience
      t.timestamps
    end
  end
end
