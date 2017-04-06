Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    match 'places' => 'places#all', via: :get
    match 'places' => 'places#some', via: :get
  end
end
