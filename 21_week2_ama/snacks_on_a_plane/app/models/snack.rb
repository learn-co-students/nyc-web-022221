class Snack < ApplicationRecord
  has_many :user_snacks, dependent: :destroy
  has_many :users, through: :user_snacks
  
  # The user must provide a snack name
  validates :name, presence: :true
  # flavor_profile should be one of these ['sweet', 'salty', 'bitter']
  validates :flavor_profile, inclusion: {in: ['sweet', 'salty', 'bitter']}
end
