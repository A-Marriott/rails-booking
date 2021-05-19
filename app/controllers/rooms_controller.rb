class RoomsController < ApplicationController
  def index
    @room = Room.first
    @rooms = Room.where(company_id: current_user.company_id)
  end

  def new
    @room = Room.new
  end

  def create
    @room = Room.new(room_params, company_id: current_user.company_id)
    if @room.save
      redirect_to rooms_path
    else
      render :new
    end
  end

  def show
    @room = Room.find(params[:id])
    # how to stop people from other companies looking at room??
  end

  def edit
    @room = Room.find(params[:id])
    # how to stop people from other companies editing room??
  end

  def update
    # how to stop people from other companies editing room??
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
    @room.destroy
    redirect_to rooms_path
    # how to stop people from other companies deleting room??
  end

  private

  def room_params
    params.require(:room).permit( :name, :headline, :base_price, :capacity, :description )
  end

end
