class Appointment

    @@all = []

    attr_accessor :date, :time, :reason_for_visit
    attr_reader :doctor, :patient

    def initialize(date, time, reason_for_visit, doctor_instance, patient_instance)
        @date = date
        @time = time
        @reason_for_visit = reason_for_visit
        @doctor = doctor_instance
        @patient = patient_instance

        @@all << self
    end

    def self.all
        @@all
    end

end