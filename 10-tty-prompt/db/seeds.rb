# Seed Your Database
User.destroy_all
Category.destroy_all
Post.destroy_all
Comment.destroy_all

User.reset_pk_sequence
Category.reset_pk_sequence
Post.reset_pk_sequence
Comment.reset_pk_sequence

eric = User.create(username: "Eric", password: "abc123")
toni = User.create(username: "Toni", password: "abc123")
sean = User.create(username: "sean", password: "abc123")

10.times do 
    Category.create(name: Faker::Game.title)
end

p1 = Post.create(user_id: eric.id, category_id: Category.all.sample.id, title: "Eric's First Post", body: Faker::Lorem.paragraph)
p2 = Post.create(user_id: eric.id, category_id: Category.all.sample.id, title: "Eric's Second Post", body: Faker::Lorem.paragraph)
p3 = Post.create(user_id: toni.id, category_id: Category.all.sample.id, title: "Toni's First Post", body: Faker::Lorem.paragraph)




