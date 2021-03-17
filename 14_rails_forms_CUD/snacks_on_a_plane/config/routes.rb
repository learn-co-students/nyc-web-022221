Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :snacks, only: [:index, :show]

  get '/snacks', to: 'snacks#index', as: 'snacks'
  get '/snacks/new', to: 'snacks#new', as: 'new_snack'
  get '/snacks/:id', to: 'snacks#show', as: 'snack'
  get '/snacks/:id/edit', to: 'snacks#edit', as: 'edit_snack'

  post '/snacks', to: 'snacks#create'
  patch '/snacks/:id', to: 'snacks#update'
  # delete '/snacks/:id', to: 'snacks#destroy'

end


# snacks_path = '/snacks'
# snack_path = '/snacks/:id'
# snack_path(5) = '/snacks/5'




