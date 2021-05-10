class Api::V1::RoomsController < Api::V1::BaseController
  before_action :set_room, only: [:show, :update, :destroy]

  def index
    @rooms = Room.all
    render json: @rooms
    # raise
  end

  def show
    render json: @room
  end

  def create
    @room = Room.create!(room_params)
    if @room
      render json: @room
    else
      render json: @room.errors
    end
  end

  def update
    if @room.update(room_params)
      render json: @room
    else
      render json: @room.errors
    end
  end

  def destroy
    @room.destroy
    head :no_content
  end

  private

  def set_room
    @room = Room.find(params[:id])
  end

  def room_params
    params.require(:room).permit(:base_price, :name, :headline, :description, :capacity, :published, :category)
  end
end
