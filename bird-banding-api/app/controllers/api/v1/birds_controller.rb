class Api::V1::BirdsController < ApplicationController
  before_action :set_bird, only: [:show, :update, :destroy]


  def index
    @birds = Bird.all
    render json: @birds
  end


  def show
    json_bird = BirdSerializer.new(bird).serialized_json
  end


  def create
    @bird = Bird.create(bird_params)
    if @bird.save
      render json: @bird
    else
      render json: {error: "Bird can't be created."}
    end
  end


  def update
    if @bird.update(bird_params)
      render json: @bird
    else
      render json: @bird.errors, status: :unprocessable_entity
    end
  end


  def destroy
    if @bird.destroy
      render json: { data: "Bird successfully destroyed", id: @bird.id }
    else
      error_resp = {
        error: "Bird not found and not deleted"
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  private

    def set_bird
      @bird = Bird.find(params[:id])
    end


    def bird_params
      params.require(:credentials).permit(:band_number, :species, :sex, :year, :fat, :wingspan, :weight, :user_id)
    end
end
