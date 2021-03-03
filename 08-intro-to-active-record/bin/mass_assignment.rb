require_relative "../config/environment"


class Clown
  attr_accessor :name, :age, :fear, :skill

  @@all = []

  def initialize(name, age, fear, skill)
    @name = name
    @age = age
    @fear = fear
    @skill = skill

    @@all << self
  end

  def self.all
    @@all
  end

end


krusty = Clown.new("Krusty", 42, "chainsaws", "balloons")





binding.pry
"yay"