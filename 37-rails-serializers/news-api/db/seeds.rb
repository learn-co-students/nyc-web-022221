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
    author: Author.last,
  },
  {
    title: "We've had it all wrong",
    description: "In recent news, scientists discovered that the fluffy animals we've commonly refered to as 'Hamsters' are actually really named 'Hamstars'. History and science books are being updated as we speak.",
    image: "https://www.pbs.org/wgbh/nova/media/images/iStock-473012660.width-1500.jpg",
    likes: 9005,
    author: Author.last,
  },
  {
    title: "Squirrel climbs up bird house",
    description: "This just in; during the backyard patrol, a local dog spotted a squirrel climbing up a bird house scaring the birds away. It then proceeded to take the seeds and stuff them into its mouth. The squirrel knocked over the bird house with its weight and fled the scene. Concerns has led the owner to purchase a squirrel proof pole.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/1920px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg",
    likes: 9005,
    author: Author.last,
  },
  {
    title: "Fox Runs",
    description: "This fox is great",
    image: "https://randomfox.ca/images/98.jpg",
    likes: 17,
    author: Author.first,
  },
  {
    title: "Hamsters Rule",
    description: "Hamster, from the German word hamstern” means hoard, which is a favorite pastime of our hamster friends.",
    image: "https://cdn.mos.cms.futurecdn.net/S62tKo2WjJ8NfU4bPX9GvU-1200-80.jpg",
    likes: 0,
    author: Author.first,
  },
  {
    title: "20 irresistible Recipes",
    description: "Lasagna, Beef, Chicken, Salad, Corn, Crabs, Steak,...",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
    likes: 0,
    author: Author.second,
  },
  {
    title: "Veggies are healthy",
    description: "Science continues its research on food and finds that vegetables continue to be healthy for your average human being.",
    image: "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg",
    likes: 0,
    author: Author.third,
  },
]

articles.each do |article_hash|
  Article.create!(article_hash)
end
