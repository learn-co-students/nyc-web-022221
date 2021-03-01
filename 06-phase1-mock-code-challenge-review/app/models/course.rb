class Course

    attr_reader :tutor, :student, :course_name
    
    @@all = []

    def initialize(tutor, student, course_name)
        @tutor = tutor
        @student = student
        @course_name = course_name

        @@all << self
    end

    def self.all
        @@all
    end
end