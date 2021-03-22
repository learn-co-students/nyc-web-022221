class UserSnack < ApplicationRecord
  belongs_to :user
  belongs_to :snack

  
  # review Content is more then 10 char
  validates :review, length: {minimum: 10}

  # rating greater than 0 less than 10
  validates :rating, numericality: {less_than_or_equal_to: 10, greater_than: 0}

  # a user can only review/rate a snack once
  validates :user_id, uniqueness: {scope: :snack_id}


end
