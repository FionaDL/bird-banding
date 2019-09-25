Rails.application.routes.draw do


  namespace :api do
    namespace :v1 do
        resources :users
        resources :birds
    end
  end

  get "api/v1/login", to: "sessions#create"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
