class Booking < ApplicationRecord
  has_many :room_bookings
  has_many :rooms, through: :room_bookings
end
