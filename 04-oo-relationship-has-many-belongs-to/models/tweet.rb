class Tweet

    attr_accessor :message
    attr_reader :user

    @@all_tweets = []

    def initialize(message_arg, user_arg)
        @message = message_arg
        @user = user_arg


        # self is the new tweet object
        @@all_tweets << self
    end

    # self is the name of a class method called `all`
    def self.all
        @@all_tweets
    end

    def username
        # self.user.username - self
        # @user.username - instance variable
        user.username # method lookup chain
    end
end
