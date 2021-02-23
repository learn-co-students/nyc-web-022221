require 'pry'
# Define a class, called Superhero
# Create a setter and getter method for a superhero's attributes
# Write a method in which a superhero will announce an attribute


# local variable: batman
# instance variable: @name
# class variable: @@all_superheroes

# creating class `all` method
# 1. define class method: self.all
# 2. define class variable: @@all_superheroes
# 3. push new object into class variable
# 4. call class variable in body of class method


class Superhero

    attr_accessor :name, :power

    # class variable
    @@all_superheroes = []
    
    # instance method
    def initialize(name, power)
        @name = name
        @power = power
        @@all_superheroes << self

        # self at instance level
        puts "I am inside of initialize #{self}"
    end

    # self at class level
    # class method
    def self.who_am_i
        puts "I am inside of who am i: #{self}"
    end

    # instance method
    def who_am_i
        puts "#{self}"
        puts "I am first #{self.name}" # explicit use of self. instance name: batman
        puts "I am second #{name}" # implicit use of self. attr_accessor name method used
        puts "I am third #{@name}" # directly accessing instance variable
        # puts "I am fourth #{self.@name}" # not going to work b/c @name is an instance variable, not a method
    end

    # instance method
    def announce_power
        puts "#{@name}'s power is #{@power}"
    end

    # class method
    # show all superheroes at once
    def self.all
        @@all_superheroes
    end

end

batman = Superhero.new('Batman', 'Money and Intellect')
superman = Superhero.new('Superman', 'Super Strength')
flash = Superhero.new('Flash', 'Super Speed')


binding.pry
