# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "BanderKim", password: "password", location:"Block Island")

Bird.create(band_number: 5555555, species: "cat bird", sex: "m", year: "hy", fat: 1, wingspan: 8.9, weight: 1, user_id: 1)
