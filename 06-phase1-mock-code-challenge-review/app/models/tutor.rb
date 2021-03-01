class Tutor
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
        Course.all.select { |banana| banana.tutor == self }
    end

    def students
        self.courses.map {|course| course.student}
    end
end