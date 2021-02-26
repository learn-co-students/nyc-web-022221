class Doctor

    @@all = []

    attr_accessor :specialty, :hospital
    attr_reader :name

    def initialize(name, specialty, hospital)
        @name = name
        @specialty = specialty
        @hospital = hospital

        @@all << self
    end

    def self.all
        @@all
    end

    def appointments
        Appointment.all.select {|appointment| appointment.doctor == self}
    end

    def patients
        appointments.map {|appointment| appointment.patient}
    end

end