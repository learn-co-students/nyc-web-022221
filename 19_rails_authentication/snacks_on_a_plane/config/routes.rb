Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # resources :friendships
  resources :user_snacks, only: [:new, :create]
  resources :users, only: [:index, :show, :new, :create]
  resources :snacks

  delete '/page_reset', to: 'sessions#reset_page_views', as: "reset"
  delete '/logout', to: 'sessions#logout', as: "logout"
  get '/login', to: 'sessions#new_login', as: "new_login"
  post '/login', to: 'sessions#login'

  # resources :users do 
  #   resources :snacks
  # end 

  # get '/snacks', to: 'snacks#index', as: 'snacks'
  # get '/snacks/new', to: 'snacks#new', as: 'new_snack'
  # get '/snacks/:id', to: 'snacks#show', as: 'snack'
  # get '/snacks/:id/edit', to: 'snacks#edit', as: 'edit_snack'

  # post '/snacks', to: 'snacks#create'
  # patch '/snacks/:id', to: 'snacks#update'
  # delete '/snacks/:id', to: 'snacks#destroy'

end


# snacks_path = '/snacks'
# snack_path = '/snacks/:id'
# snack_path(5) = '/snacks/5'




