class Talnet < User
  has_one :profile, dependent: :destroy

  after_create :create_profile

  private

  def create_profile
    Profile.create!(talnet: self)
  end
end
