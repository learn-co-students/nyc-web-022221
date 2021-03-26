class SnacksController < ApplicationController
  before_action :find_snack, only: [:show, :edit, :update, :destroy]
  
  def index 
    @snacks = Snack.all
    # render :index
  end 

  def show
    # @snack = Snack.find(params[:id])

    if session[:page_views]
      session[:page_views] = session[:page_views] + 1
    else 
      session[:page_views] = 1
    end 
    # render :show
  end 

  def new 
    @snack = Snack.new
    # render :new
  end 
  
  def create 
    @snack = Snack.create(snack_params)

    if @snack.valid?
      redirect_to snack_path(@snack.id)
    else 
      flash[:errors] = @snack.errors.full_messages 
      redirect_to new_snack_path
    end
  end 
  
  def edit 
    # @snack = Snack.find(params[:id])
    
    # render :edit
  end 
  
  def udpate 
    if @snack.update(snack_params)
      redirect_to snack_path(@snack.id)
    else 
      flash[:errors] = @snack.errors.full_messages 
      redirect_to edit_snack_path
    end
    
    redirect_to snack_path(@snack)
  end 
  
  def destroy
    # @snack = Snack.find(params[:id])
    @snack.destroy

    redirect_to snacks_path
  end 

  private

  def snack_params
    params.require(:snack).permit(:name, :brand, :rating, :flavor_profile)
  end 

  def find_snack
    @snack = Snack.find(params[:id])
  end 
  
  # def snack_params(*args)
  #   params.require(:snack).permit(args)
  # end 
  
  # def update_snack_params
  #   params.require(:snack).permit(:name, :brand, :flavor_profile)
  # end 

end
