class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  filter_access_to :all
  protect_from_forgery with: :exception
  
end
