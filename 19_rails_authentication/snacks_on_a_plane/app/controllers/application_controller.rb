class ApplicationController < ActionController::Base
  before_action :logged_in_user
  
  def logged_in_user
    @current_user = User.find_by(id: cookies[:user_id])
  end 

end
