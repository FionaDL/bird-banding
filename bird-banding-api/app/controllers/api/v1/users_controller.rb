class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]


  def index
    @users = User.all

    render json: @users
  end


  def show
    user_json = UserSerializer.new(@user).serialized_json

    @birds = @user.birds
    render json: @birds
  end


  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] =@user.id
      render json: @user, status: :created
    else
      render json: {error: "Unable to create user."}
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find_by(id: params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:credentials).permit(:username, :password, :location)
    end
end
