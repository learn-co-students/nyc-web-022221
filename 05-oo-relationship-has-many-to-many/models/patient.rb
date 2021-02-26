class Patient

    @@all = []

    attr_accessor :age
    attr_reader :name

    def initialize(name, age)
        @name = name
        @age = age

        @@all << self
    end

    def self.all
        @@all
    end

    def appointments
        Appointment.all.select {|appointment| appointment.patient == self}
    end

    def doctors
        appointments.map {|appointment| appointment.doctor}
    end
end