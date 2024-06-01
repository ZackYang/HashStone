class Education < ApplicationRecord
  belongs_to :profile

  validates :school, presence: true
  validates :degree, presence: true
  validates :start_month, :presence, numericality: { greater_than: 0, less_or_equal_than: 12 }
  validates :start_year, :presence, numericality: { greater_than: 1950, less_or_equal_than: Time.now.year }
  validates :end_month, :presence, numericality: { greater_than: 0, less_or_equal_than: 12 }
  validates :end_year, :presence, numericality: { greater_than: 1950, less_or_equal_than: Time.now.year }

  def to_s
    "#{school} - #{degree}"
  end
end
