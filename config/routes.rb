Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "articles#index"
 
  #get "/article", to: "article#articles"
  #get "/view/:id", to: "article#view"
  
  #post "/article", to: "article#create"
  #get "/new", to: "article#new"
  
  resources :articles
  
end


Rails.cache.clear
