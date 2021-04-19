# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🗑 Deleting articles..."
Article.destroy_all

puts "🗑 Deleting authors..."
Author.destroy_all

puts "Creating authors..."
authors = [
  {
    name: "Fluff Daddy",
    specialty: "Fashion, Music",
    age: 40,
  },
  {
    name: "Wanda Sykes",
    specialty: "Magic",
    age: 70,
  },
  {
    name: "Cosmo Sykes",
    specialty: "Donkeys",
    age: 75,
  },
  {
    name: "Raffy",
    specialty: "Crypto Currency, Animals, Food",
    age: 10,
  },
]

authors.each do |author_hash|
  Author.create!(author_hash)
end

puts "Creating articles..."
articles = [
  {
    title: "Fluff Daddy",
    description: "Breaking: Puff Daddy changes his name yet again, this time to help promote his line of extremely fluffy coats",
    image: "https://i.redd.it/l0uj355oxv341.jpg",
    likes: 50,
    author: Author.first,
  },
  {
    title: "We've had it all wrong",
    description: "In recent news, scientists discovered that the fluffy animals we've commonly refered to as 'Hamsters' are actually really named 'Hamstars'. History and science books are being updated as we speak.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/1920px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg",
    likes: 9005,
    author: Author.first,
  },
  {
    title: "Fox Runs",
    description: "This fox is great",
    image: "https://randomfox.ca/images/98.jpg",
    likes: 17,
    author: Author.last,
  },
  {
    title: "Hamsters Rule",
    description: "Hamster, from the German word hamstern” means hoard, which is a favorite pastime of our hamster friends.",
    image: "https://cdn.mos.cms.futurecdn.net/S62tKo2WjJ8NfU4bPX9GvU-1200-80.jpg",
    likes: 0,
    author: Author.last,
  },
]

articles.each do |article_hash|
  Article.create!(article_hash)
end
