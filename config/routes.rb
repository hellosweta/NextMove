Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :yelp, only: [:index]
  end

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :places, only: [:index]
  end
end
