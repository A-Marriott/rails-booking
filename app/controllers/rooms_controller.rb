class RoomsController < ApplicationController
  def index
    # @rooms = Room.where(company_id: current_user.company_id)
    @rooms = policy_scope(Room)
  end

  def new
    @room = Room.new
    authorize @room
  end

  def create
    @room = Room.new(room_params, company_id: current_user.company_id)
    authorize @room
    if @room.save
      redirect_to rooms_path
    else
      render :new
    end
  end

  def show
    @room = Room.find(params[:id])
    authorize @room
  end

  def edit
    @room = Room.find(params[:id])
    authorize @room
  end

  def update
    @room = Room.find(params[:id])
    @room.update(room_params)
    if @room.save
      redirect_to room_path
    else
      render :edit
    end
  end

  def destroy
    @room = Room.find(params[:id])
    authorize @room
    @room.destroy
    redirect_to rooms_path
  end

  private

  def room_params
    params.require(:room).permit(:name, :headline, :base_price, :capacity, :description)
  end
end
