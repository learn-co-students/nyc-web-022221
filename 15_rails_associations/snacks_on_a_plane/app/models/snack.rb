class Snack < ApplicationRecord
  has_many :user_snacks, dependent: :destroy
  has_many :users, through: :user_snacks
end
