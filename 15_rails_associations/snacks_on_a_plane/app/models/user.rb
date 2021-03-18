class User < ApplicationRecord
  has_many :user_snacks, dependent: :destroy
  has_many :snacks, through: :user_snacks

  def bio
    "#{self.name} - #{self.motto}"
  end 
end
