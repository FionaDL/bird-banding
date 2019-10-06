class Api::V1::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:credentials][:username])
    if @user && @user.authenticate(params[:credentials][:password])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {error: "Invalid Username or Password."}
    end
  end

  def get_current_user
    if logged_in?
      render json: current_user
    else
      render json: {error: "No one is logged in."}
    end
  end

  def destroy
  end

end
