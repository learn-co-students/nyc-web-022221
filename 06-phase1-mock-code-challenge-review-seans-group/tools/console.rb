# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

student1 = Student.new("Ferris Bueller")
student2 = Student.new("Cameron")
student3 = Student.new("Bart Simpson")

tutor1 = Tutor.new("Professor X")
tutor2 = Tutor.new("Obi-Wan Kenobi")
tutor3 = Tutor.new("Rick Ross")

course1 = Course.new(tutor1, student1, "telekenisis 101")
course2 = Course.new(tutor3, student2, "earworming")
course3 = Course.new(tutor2, student1, "andre says intro to lightsabers bc its obi-wan")
course4 = Course.new(tutor1, student2, "vanquishing villains 102")
course5 = Course.new(tutor1, student1, "super suit design")
course6 = Course.new(tutor2, student1, "ohhhhu mmmm the force")



binding.pry
0
