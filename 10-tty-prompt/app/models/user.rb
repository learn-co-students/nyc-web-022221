class User < ActiveRecord::Base
    has_many :posts
    has_many :categories, through: :posts

    # has_many :comments
    # has_many :posts, through: :comments

    def self.login_helper_class_method
        puts "What is your username?"
        username = STDIN.gets.chomp
        puts "What is your password?"
        pass = STDIN.gets.chomp
        # .find_by({}) 
        user_inst = User.find_by(username: username, password: pass)

        until user_inst 
            sleep 1
            system 'clear'
            puts "Incorrect username or password"
            user_inst = User.login_helper_class_method
        end

        user_inst
    end


    def self.register
        puts "What is your username?"
        username = STDIN.gets.chomp
        puts "What is your password?"
        pass = STDIN.gets.chomp
        user_inst = User.create(username: username, password: pass)
    end


    def display_posts
        if posts.length > 0

            array_of_hashes = posts.map do |post|
                # The key of the hash is what gets shown
                # The value of the hash is what gets saved
                {post.title => post.id}
            end

            post_id = TTY::Prompt.new.select("What post do you want to see more info?", array_of_hashes)
            puts "You chose post with ID of #{post_id}"
        else
            puts "You don't have any posts sorry"
        end

    end

end