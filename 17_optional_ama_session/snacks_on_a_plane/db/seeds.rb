# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

UserSnack.destroy_all
Snack.destroy_all
User.destroy_all

puts "...Creating Snacks 🍪🍿"
food_prof = ["spicy", "sweet", "salty"]

20.times do 
  Snack.create(name: Faker::Food.ingredient, brand: Faker::Superhero.prefix, flavor_profile: food_prof.sample)
end 



puts "...Creating Users 🙎‍♀️🙍‍♂️"
users = [
  {name: "Carlos La Torre", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01HZS9Q336-1f74273d7034-512"},
  {name: "Colten Appleby", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01NNMVS9C5-d68e87b0c135-512"},
  {name: "Diana Liao", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01JBESM25S-75adb8bc35eb-512"},
  {name: "Christopher Kim", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01LYNW3TMM-de7dfc536650-512"},
  {name: "Henry Velasquez", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01N0PGUK55-667353f3a6ca-512"},
  {name: "Amanda Nikrant", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01HLHQ6JRH-a2f6a940e9d7-512"},
  {name: "Melissa Lawrence", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01ME61T70A-eff36ea99e86-512"},
  {name: "Radiyah Abdus-Sabur", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01MS0E5UGM-b6e1d5ff3843-512"},
  {name: "Jabair Khan", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01LQ3XCA9Y-c2b88ff33f15-512"},
  {name: "Yuri Nguyen", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01N31WKVTJ-a989d77fc8f4-512"},
  {name: "Sean Padden", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-UJW55RH1R-95bb92aacdc8-512"},
  {name: "Andre Powers", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01P99HC1B2-d2de4cdbe6e5-512"},
  {name: "Seth Cohen", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01MJQ8U7T3-63789d10f0b0-512"},
  {name: "Matt Newton", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01NN9ERSNM-3db34d69031b-512"},
  {name: "Shafee Rushdan", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01NT4W4VSQ-7cc81b5bc498-512"},
  {name: "menachem futerfas", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01FTL07RNE-45acc97293d2-512"},
  {name: "Susana Vik", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01MP4BMN58-1cd860a08ac6-512"},
  {name: "James Hoggard", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01KH0VVA0K-51f20d36793e-512"},
  {name: "Michelle Pathe", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U9C1QTFPC-e5129d5d4af5-512"},
  {name: "Toni Langley", motto: Faker::TvShows::NewGirl.quote, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01JWUFBCQ0-4baa729d7cc6-512"}
]

users.each do |user|
  User.create(user)
end 


puts '...Creating Reviews 📝'
50.times do 
  UserSnack.create(user_id: User.all.sample.id, snack_id: Snack.all.sample.id, review: Faker::Movies::BackToTheFuture.quote, rating: rand(1..5))
end 


50.times do 
  Friendship.create(followee_id: User.all.sample.id, follower_id: User.all.sample.id)
end 