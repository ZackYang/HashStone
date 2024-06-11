class Profile < ApplicationRecord
  belongs_to :talent, class_name: 'User', foreign_key: 'user_id'

  # has_one :addresses, as: :addressable, dependent: :destroy

  has_many :profile_skills, dependent: :destroy
  has_many :skills, through: :profile_skills

  has_many :experiences, dependent: :destroy
  has_many :experience_skills, through: :experiences

  has_many :educations, dependent: :destroy

  include AASM

  aasm column: :status do
    state :pending, initial: true
    state :profile_reviewing
    state :profile_review_failed
    state :cultural_fit_interview
    state :cultural_fit_interview_failed
    state :technical_test
    state :technical_test_failed
    state :technical_interview
    state :technical_interview_failed
    state :active
    state :inactive

    event :profile_submit do
      transitions from: :pending, to: :profile_reviewing
    end

    event :profile_approve do
      transitions from: :profile_reviewing, to: :cultural_fit_interview
    end

    event :cultural_fit_interview_approve do
      transitions from: :cultural_fit_interview, to: :technical_test
    end

    event :technical_test_approve do
      transitions from: :technical_test, to: :technical_interview
    end

    event :technical_interview_approve do
      transitions from: :technical_interview, to: :active
    end

    event :deactivate do
      transitions to: :inactive
    end

    event :fail do
      transitions from: :profile_reviewing, to: :profile_review_failed
      transitions from: :cultural_fit_interview, to: :cultural_fit_interview_failed
      transitions from: :technical_test, to: :technical_test_failed
      transitions from: :technical_interview, to: :technical_interview_failed
    end
  end
end
