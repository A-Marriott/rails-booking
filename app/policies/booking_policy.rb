class BookingPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if user.admin?
        scope.all
      else
        @bookings = []
        user.company.rooms.each do |room|
          room.bookings.each do |booking|
            @bookings << booking
          end
        end
        @bookings.uniq!
        @bookings
      end
    end
  end

  def create?
    user
  end

  def show?
    user.admin? || record.rooms.first.company_id == user.company_id
  end

  def update?
    user.admin? || record.rooms.first.company_id == user.company_id
  end

  def destroy?
    user.admin? || record.rooms.first.company_id == user.company_id
  end
end
