class Tutor
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
    Course.all.select {|course| course.tutor == self}
    
    ### same as...
    # Course.all.select do |course| 
    #   course.tutor == self 
    # end 
  end

  def students 
    courses.map do |course|
      course.student
    end 
  end 

  def tutored_student?(student)

    students.include?(student) 

    ### Iterate over courses
    # courses.each do |course|
    #   if course.student == student 
    #     return true 
    #   end 
    # end 
    # return false 
    
    ### Iterate over students
    # students.each do |student_instance|
    #   if student == student_instance 
    #     return true 
    #   end 
    # end 
    # return false

  end 

end