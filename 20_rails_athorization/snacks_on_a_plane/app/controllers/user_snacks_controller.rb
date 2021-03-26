class UserSnacksController < ApplicationController
  def new 
    @user_snack = UserSnack.new

    @users = User.all
    @snacks = Snack.all
  end 

  def create 
    # params_hash = user_snack_params
    # params_hash[:user_id] = cookies[:user_id] 
    # @user_snack = UserSnack.create(params_hash)


    # user_snack_array = @current_user.user_snacks.create(user_snack_params)
    @user_snack = @current_user.user_snacks.build(user_snack_params)

    if @user_snack.save
      redirect_to user_path(@current_user)
    else 
      flash[:my_errors] = @user_snack.errors.full_messages

      redirect_to new_user_snack_path
    end

  end 

  private 

  def user_snack_params
    params.require(:user_snack).permit(:snack_id, :review, :rating)
  end 
  # def create 
  # end
end
