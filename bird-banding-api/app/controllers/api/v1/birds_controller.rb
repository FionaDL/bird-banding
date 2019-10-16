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
    binding.pry
    @bird = Bird.new(bird_params)

    if @bird.save
      render json: @bird, status: :created, location: @bird
    else
      render json: @bird.errors, status: :unprocessable_entity
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
    @bird.destroy
  end

  private

    def set_bird
      @bird = Bird.find(params[:id])
    end


    def bird_params
      params.require(:bird).permit(:band_numner, :species, :sex, :year, :fat, :wingspan, :weight, :user_id)
    end
end
