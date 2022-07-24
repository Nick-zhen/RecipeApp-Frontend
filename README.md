# RecipeApp-Frontend 

<p> Because it is complex to deploy frontend and backend in monoropo, I separated them as 2 repo. The whole project is here https://github.com/Nick-zhen/Recipe-full-stack-app </p>  

---  
 
## Deploy frontend to Heroku

1. create a account on [Heroku](https://dashboard.heroku.com/apps). 

2. create a new repo for frontend. 

3. create a new app in heroku. get into the "Deploy". Choose the GitHub connection in Deploymeny method
<img width="1317" alt="image" src="https://user-images.githubusercontent.com/62523802/180636538-b06ab9b6-d884-4596-acb0-fc732638cd6f.png">

It is almost done! you can click the "manually deply" to deploy our fronted. However, as a developer, we wanna automate everthing!

4. add GitHub action workflow 
```yml
name: front-end deploy

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: akhileshns/heroku-deploy@v3.12.12 # This is the action
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "your app name in heroku" #Must be unique in Heroku
          heroku_email: "your email in heroku"

```
It's done! happy coding!!!

