class User < ApplicationRecord
  has_secure_password

  validates :username, :location, presence: true
  validates :username, uniqueness: true

  has_many :birds

end
