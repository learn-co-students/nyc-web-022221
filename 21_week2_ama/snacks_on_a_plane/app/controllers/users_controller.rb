class UsersController < ApplicationController
  skip_before_action :logged_in?, only: [:new, :create, :index]


  def index 
    @users = User.all
  end 
  
  def show 
    @user = User.find(params[:id])

    if @current_user == @user 
      render :show
    else  
      flash[:message] = "You can only see your own profile"
      redirect_to users_path
    end 
  end 

  def new
    @user = User.new
  end 

  def create 
    user = User.create(user_params)

    if user.valid?
      cookies[:user_id] = user.id
      redirect_to user
    else
      flash[:errors] = flash.errors.full_messages
      redirect_to new_user_path
    end 
  end 

  private 

  def user_params 
    params.require(:user).permit(:name, :img_url, :motto, :password, :email)
  end 
end
