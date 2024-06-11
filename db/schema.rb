# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_06_07_034539) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "addressable_type", null: false
    t.uuid "addressable_id", null: false
    t.string "type", null: false
    t.string "unit"
    t.string "street_one", null: false
    t.string "street_two"
    t.string "city", null: false
    t.string "state"
    t.string "zip", null: false
    t.string "country", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["addressable_type", "addressable_id"], name: "index_addresses_on_addressable"
  end

  create_table "educations", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "profile_id", null: false
    t.string "school", null: false
    t.string "degree", null: false
    t.integer "start_month", null: false
    t.integer "start_year", null: false
    t.integer "end_month", null: false
    t.integer "end_year", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_educations_on_profile_id"
  end

  create_table "experience_skills", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "experience_id", null: false
    t.uuid "skill_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["experience_id"], name: "index_experience_skills_on_experience_id"
    t.index ["skill_id"], name: "index_experience_skills_on_skill_id"
  end

  create_table "experiences", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "profile_id", null: false
    t.string "company", null: false
    t.string "position", null: false
    t.integer "start_month", null: false
    t.integer "start_year", null: false
    t.integer "end_month"
    t.integer "end_year"
    t.boolean "current", default: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_experiences_on_profile_id"
  end

  create_table "profile_skills", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "profile_id", null: false
    t.uuid "skill_id", null: false
    t.integer "years_of_experience"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_profile_skills_on_profile_id"
    t.index ["skill_id"], name: "index_profile_skills_on_skill_id"
  end

  create_table "profiles", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.string "status", null: false
    t.string "github_address"
    t.jsonb "social_links", default: {}
    t.integer "years_of_experience"
    t.integer "can_start_in_weeks"
    t.datetime "profile_submitted_at"
    t.datetime "profile_approved_at"
    t.uuid "profile_approved_by_id"
    t.string "english_proficiency"
    t.datetime "profile_review_failed_at"
    t.datetime "cultural_fit_interview_failed_at"
    t.datetime "technical_test_failed_at"
    t.datetime "technical_interview_failed_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar"
    t.index ["profile_approved_by_id"], name: "index_profiles_on_profile_approved_by_id"
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "skills", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "icon_name"
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "type", null: false
    t.datetime "deactivated_at"
    t.string "deactivate_reason"
    t.string "provider"
    t.string "uid"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "educations", "profiles"
  add_foreign_key "experience_skills", "experiences"
  add_foreign_key "experience_skills", "skills"
  add_foreign_key "experiences", "profiles"
  add_foreign_key "profile_skills", "profiles"
  add_foreign_key "profile_skills", "skills"
  add_foreign_key "profiles", "users"
  add_foreign_key "profiles", "users", column: "profile_approved_by_id"
end
