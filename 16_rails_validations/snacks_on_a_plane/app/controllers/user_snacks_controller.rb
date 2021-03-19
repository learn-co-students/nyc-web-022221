class UserSnacksController < ApplicationController
  def new 
    @user_snack = UserSnack.new

    @users = User.all
    @snacks = Snack.all
  end 

  def create 
    @user_snack = UserSnack.create(user_snack_params)
    # @user_snack = UserSnack.new(user_snack_params)

      #  @user_snack.save
    if @user_snack.valid?
      redirect_to user_path(@user_snack.user)
    else 
      flash[:my_errors] = @user_snack.errors.full_messages

      redirect_to new_user_snack_path
    end

  end 

  private 

  def user_snack_params
    params.require(:user_snack).permit(:user_id, :snack_id, :review, :rating)
  end 
  # def create 
  # end
end
