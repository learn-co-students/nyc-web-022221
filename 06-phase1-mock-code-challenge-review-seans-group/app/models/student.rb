class Student
  attr_accessor :name
  @@all = []

  def initialize(name)
    @name = name 
    @@all << self 
  end 

  def self.all 
    @@all
  end 

  def courses 
    Course.all.select {|course| course.student == self}
  end 

  def tutors 
    courses.map {|course| course.tutor}
  end 

  def enrolled_fulltime? 

    self.courses.size >= 3

    ### Using a counter variable
    # count = 0 
    # Course.all.each do |course| 
    #   if course.student == self 
    #     count += 1
    #   end 
    # end 

    # if count >= 3 
    #   return true 
    # else 
    #   return false 
    # end 
  end
end