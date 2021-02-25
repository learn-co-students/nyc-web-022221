# where all the code will be ran

# used for gems
require 'pry'
# used for files
require_relative 'models/user'
require_relative 'models/tweet'

# users
batman = User.new("IAmBatman", "I am the Dark Knight")
superman = User.new("IAmSuperman", "Superman was here")

# tweets
tweet1 = Tweet.new("The Joker is afoot", batman)
tweet2 = Tweet.new("I leap tall buildings", superman)
tweet3 = Tweet.new("in a single bound", superman)

binding.pry
