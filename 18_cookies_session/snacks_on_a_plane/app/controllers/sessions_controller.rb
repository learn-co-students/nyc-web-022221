class SessionsController < ApplicationController
  def reset_page_views 
    session[:page_views] = nil
    # cookies.delete(:page_views)

    redirect_back fallback_location: snacks_path
  end

end
