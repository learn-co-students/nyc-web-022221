require 'pry'
# make sure to install the gem! (gem install require_all)
require 'require_all'

# require_relative 'models/appointment'
# require_relative 'models/patient'
# require_relative 'models/doctor'

# does the same as lines 4-6 in one line of code
require_all 'models'

doctor1=Doctor.new("Dr Seuss", "Pediatrician", "Green Eggs and Ham")
doctor2=Doctor.new("Dr Dre", "Cardiac", "LA")
doctor3=Doctor.new("Dr Who", "Time Travel", "Phone Booth")

patient1=Patient.new("Greg", 55)
patient2=Patient.new("Eminem", 38)
patient3=Patient.new("Suzzy", 6)

appointment1=Appointment.new("Feb26", "1:00", "Regular check up", doctor1, patient3)
appointment2=Appointment.new("March13", "5:00", "Sick beats", doctor2, patient2)
appointment3=Appointment.new("April1", "1:00", "Timeeey wimmy things", doctor3, patient1)

doctor1.appointments # return Dr Seuss appt with Suzzy
doctor1.patients # return all patients assigned to Dr Seuss (Suzzy)

patient3.appointments # return Suzzy appt with Dr Seuss
patient3.patients # return all doctors assigned to Suzzy (Dr Seuss)

binding.pry