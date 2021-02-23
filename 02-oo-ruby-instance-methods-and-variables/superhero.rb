require 'pry'
# Define a class, called Superhero
# Create a setter and getter method for a superhero's attributes
# Write a method in which a superhero will announce an attribute

class Superhero
    # attr_reader :name, :power
    # attr_writer :name, :power

    attr_accessor :name, :power

    def initialize(name, power)
        # instance variable = argument initialize receives
        @name = name
        @power = power
    end

    # def name
    #     @name
    # end

    # def name=(new_name)
    #     @name=new_name
    # end

    # def power
    #     @power
    # end

    # def power=(new_power)
    #     @power=new_power
    # end

end

batman = Superhero.new('Batman', 'Money and Intellect')
binding.pry
batman.name