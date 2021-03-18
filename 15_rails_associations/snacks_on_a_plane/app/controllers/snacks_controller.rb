class SnacksController < ApplicationController
  before_action :find_snack, only: [:show, :edit, :update, :destroy]
  
  def index 
    @snacks = Snack.all

    # render :index
  end 

  def show
    # @snack = Snack.find(params[:id])

    # render :show
  end 

  def new 
    @snack = Snack.new
    # render :new
  end 
  
  def create 
    # @snack = Snack.create(snack_params(:name, :brand, :rating, :flavor_profile))
    @snack = Snack.create(snack_params)
    
    redirect_to snack_path(@snack.id)
  end 
  
  def edit 
    # @snack = Snack.find(params[:id])
    
    render :edit
  end 
  
  def udpate 
    # @snack = Snack.find(params[:id])
    # @snack.update(snack_params(:name, :brand, :flavor_profile))
    @snack.update(snack_params)
    
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
