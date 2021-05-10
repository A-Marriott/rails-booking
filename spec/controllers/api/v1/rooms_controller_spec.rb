require 'rails_helper'

describe Api::V1::RoomsController do
  describe 'GET #index' do
    it 'returns HTTP success' do
      Room.create
      get :index
      expect(response).to have_http_status(:success)
      # p JSON.parse(response.body)[0].keys
    end
  end
end
