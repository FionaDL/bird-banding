class BirdSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :user
  attributes :band_number, :species, :sex, :year, :fat, :wingspan, :weight, :user_id
end
