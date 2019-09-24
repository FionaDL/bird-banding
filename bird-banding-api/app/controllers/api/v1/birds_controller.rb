class Api::V1::BirdsController < ApplicationController
  before_action :set_bird, only: [:show, :update, :destroy]


  def index
    @birds = Bird.all

    render json: @birds
  end


  def show
    render json: @bird, status: 200
  end

  # POST /users
  def create
    @bird = Bird.new(bird_params)

    if @bird.save
      render json: @bird, status: :created, location: @bird
    else
      render json: @bird.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @bird.update(bird_params)
      render json: @bird
    else
      render json: @bird.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @bird.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bird
      @bird = Bird.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def bird_params
      params.require(:bird).permit(:band_numner, :species, :sex, :year, :fat, :wingspan, :weight, :user_id)
    end
end
