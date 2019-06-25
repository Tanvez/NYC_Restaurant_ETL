Server to get a list of restaurant based on cuisine description and grade

- Server is deployed to heroku via [link](https://nyc-restaurant-server.herokuapp.com/)
- to make a query `https://nyc-restaurant-server.herokuapp.com/api/restaurant/cruisine?cuisineDescription=<foodtype>&grade=<letterscore>`
- example: https://nyc-restaurant-server.herokuapp.com/api/restaurant/cruisine?cuisineDescription=bakery&grade=b

```sh
curl -X GET \
  'https://nyc-restaurant-server.herokuapp.com/api/restaurant/cruisine?cuisineDescription=bakery&grade=b' \
  -H 'Postman-Token: fff1e9e9-b0c3-4346-9314-14e99fd243f9' \
  -H 'cache-control: no-cache'
```

## Environment Variables ".env"
`DB_USERNAME="root"`<br>
`DB_HOST="xxxxx.us-east-1.rds.amazonaws.com"`<br>
`DB_DATABASE="restaurants"`<br>
`DB_PASSWORD="password"`<br>

## To Run Locally

```sh

npm install
npm run start

```