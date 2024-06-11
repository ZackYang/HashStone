class Talent < User
  has_one :profile, dependent: :destroy, foreign_key: :user_id

  after_create :create_profile

  private

  def create_profile
    Profile.create!(talent: self)
  end
end
