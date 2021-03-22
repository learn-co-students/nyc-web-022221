class User < ApplicationRecord
  has_many :user_snacks
  has_many :snacks, through: :user_snacks

  has_many :followed_users, foreign_key: :follower_id, class_name: 'Friendship'
  has_many :followees, through: :followed_users
  
  has_many :following_users, foreign_key: :followee_id, class_name: 'Friendship'
  has_many :followers, through: :following_users
  

  def bio
    "#{self.name} - #{self.motto}"
  end 


  def average_snack_rating
    ratings = self.user_snacks.map{|us| us.rating}

    total = ratings.sum 

    if ratings.length > 0
      total / ratings.length
    end 
  end 
end

