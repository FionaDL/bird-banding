class BirdSerializer
  include FastJsonapi::ObjectSerializer
  attributes :band_number, :species, :sex, :year, :fat, :wingspan, :weight, :user_id
end
