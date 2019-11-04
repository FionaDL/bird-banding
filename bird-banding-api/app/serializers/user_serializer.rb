class UserSerializer
  include FastJsonapi::ObjectSerializer
  has_many :birds
  attributes :username, :location, :birds
end
