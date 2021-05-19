Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :rooms, only: [ :index, :create, :show, :update, :destroy ]
    end
  end

  resources :rooms
  resources :bookings
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
