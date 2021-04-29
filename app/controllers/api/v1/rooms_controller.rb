class Api::V1::RoomsController < Api::V1::BaseController
  def index
    @rooms = Room.all
    render json: @rooms
  end
end
