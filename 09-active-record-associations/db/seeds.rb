# deletes all plants and people from the database
Plant.destroy_all
Person.destroy_all
PlantParenthood.destroy_all
# resets the ids of the plants and people table to 1
Plant.reset_pk_sequence
Person.reset_pk_sequence
PlantParenthood.reset_pk_sequence

shamrock = Plant.create(name: "Shamrock", bought: 20210317, color: "green")
sunflower = Plant.create(name: "Sunflower", bought: 20210305, color: "yellow")

lucky = Person.create(name: "Lucky", free_time: "infinite", age: 1000)
post_malone = Person.create(name: "Post Malone", free_time: "none", age: 24)

pp1 = PlantParenthood.create(favorite: true, person_id: post_malone.id, plant_id: sunflower.id)
pp2 = PlantParenthood.create(favorite: true, person_id: lucky.id, plant_id: shamrock.id)


puts "successfully seeded database"