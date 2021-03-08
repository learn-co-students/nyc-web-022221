class Interface

    attr_accessor :user
    attr_reader :prompt

    def initialize
        @prompt = TTY::Prompt.new
    end

    def welcome 
        puts "Hello, welcome to my bloggin App!"
        puts "What a great day today!"
    end

    def ask_for_login_or_register
        # puts "Would you like to login or register?"
        # Asking the user for input (allow the user to type something)
        # answer = STDIN.gets.chomp
        # if answer == "login"
        #     login_helper
        # elsif answer == "register"
        #     register_helper
        # else
        #     generic_warning_message
        # end

        prompt.select "Would you like to login or register" do |menu|
            menu.choice "Login", -> { login_helper }
            menu.choice "Register", -> {register_helper}
        end





    end

    def login_helper
        puts "You chose login"
        @user = User.login_helper_class_method
    end

    def register_helper
        puts "You chose register"
        @user = User.register_method
    end

    def generic_warning_message
        puts "FAIL LOL"
    end

    def main_menu
        @user.reload
        system 'clear'
        sleep 2
        puts "Welcome, #{@user.username}!"
        prompt.select "What do you want to do today?" do |menu|
            menu.choice "See all categories", -> {see_all_categories_helper}
            menu.choice "See my posts", -> {see_my_posts_helper}
            menu.choice "Create a POst", -> {create_a_post_helper}
            menu.choice "Exit app", -> {puts "goodbye"}
        end
    end


    def create_a_post_helper
        # Post.create(...)
    end


    def see_my_posts_helper
        @user.display_posts
        main_menu
    end



    def see_all_categories_helper

    end




    def run
        welcome
        ask_for_login_or_register
        main_menu
    end

end