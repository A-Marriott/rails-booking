class BookingPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
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
