class CreateExperienceSkills < ActiveRecord::Migration[7.1]
  def change
    create_table :experience_skills, id: :uuid, default: -> { 'gen_random_uuid()' } do |t|
      t.references :experience, null: false, foreign_key: true, type: :uuid
      t.references :skill, null: false, foreign_key: true, type: :uuid
      t.timestamps
    end
  end
end
