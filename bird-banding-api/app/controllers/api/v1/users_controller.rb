class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]


  def index
    @users = User.all

    render json: @users
  end

  
  def show
    user_json = UserSerializer.new(@user).serialized_json
    render json: user_json
  end


  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find_by(id: params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :password_digest, :location)
    end
end
