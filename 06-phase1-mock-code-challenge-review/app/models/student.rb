class Student

    attr_accessor :name

    @@all = []

    def initialize(name)
        @name=name

        @@all << self
    end

    def self.all
        @@all
    end

    def courses
        Course.all.select { |course| course.student == self }
    end

    def tutors
        courses.map {|course| course.tutor}
    end
end