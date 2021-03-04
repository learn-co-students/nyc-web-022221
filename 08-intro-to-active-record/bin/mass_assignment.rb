require_relative "../config/environment"


class Clown
  attr_accessor :name, :age, :fear, :skill, :location

  ## example of a setter method
  ## key (skill=) 
  ## value (new_skill)
  # def skill=(new_skill)
  #   @skill = new_skill
  # end

  @@all = []

  def initialize(args_hash)
    args_hash.each do |key, value|

      binding.pry
      self.send("#{key}=", value)
    end
    # @name = args_hash[:name]
    # @age = args_hash[:age]
    # @fear = args_hash[:fear]
    # @skill = args_hash[:skill]

    @@all << self
  end

  def self.all
    @@all
  end

end


krusty = Clown.new({skill: "balloons", name: "Krusty", age: 42, fear: "chainsaws", location: ""})


# krusty = Clown.new("Krusty", 42, "chainsaws", "balloons")





binding.pry
"yay"