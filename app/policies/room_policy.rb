class RoomPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if user.admin?
        scope.all
      else
        scope.where(company_id: user.company_id)
      end
    end
  end

  def create?
    user
  end

  def show?
    true
  end

  def update?
    user.admin? || record.company_id == user.company_id
  end

  def destroy?
    user.admin? || record.company_id == user.company_id
  end
end
