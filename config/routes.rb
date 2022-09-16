Rails.application.routes.draw do

  namespace :api do
    resources :workers do
      resources :service
    end

    resources :service do
      resources :comments
    end
  end
  
end
