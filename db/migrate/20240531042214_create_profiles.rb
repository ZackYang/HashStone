class CreateProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles, id: :uuid, default: -> { 'gen_random_uuid()' } do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.string :status, null: false
      t.string :github_address
      t.jsonb :social_links, default: {}
      t.integer :years_of_experience
      t.integer :can_start_in_weeks
      t.datetime :profile_submitted_at
      t.datetime :profile_approved_at
      t.references :profile_approved_by, foreign_key: { to_table: :users }, type: :uuid
      t.string :english_proficiency
      t.datetime :profile_review_failed_at
      t.datetime :cultural_fit_interview_failed_at
      t.datetime :technical_test_failed_at
      t.datetime :technical_interview_failed_at
      t.timestamps
    end
  end
end
