Rails.application.routes.draw do
  devise_for :users,
             path: '/auth',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               sign_up: 'register'
             },
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations',
               omniauth_callbacks: 'users/omniauth_callbacks'
             }

  post '/graphql', to: 'graphql#execute'

  namespace :api do
    resources :hospitals, only: %i[index update]
    resources :pharmacies, only: %i[index]
  end

  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Defines the root path route ("/")
  root 'homepage#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # All other routes go to homepage#index
  get '*path' => 'homepage#index'
end
