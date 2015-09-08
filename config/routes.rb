Rails.application.routes.draw do

  resources :users, only: [:new, :create,:show]
  root 'home#index'

end
