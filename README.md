# GeoSpatial-Data-API
This is for my GeoSpatial Data API Assignment.
<br>

## How to Setup and Run the application:
1. Open the code in your preferred IDE.
2. Make sure to install all dependencies by running the following: npm init -y, npm install express dotenv morgan, npm install nodemon -D, npm install mongoose.
4. In the terminal, run "npm run dev" to start your local server.
5. In your IDE, create a .env file that will allow you to store your API key as OPENWEATHER_API_KEY = Your Key Here. You will also need the .env file to have PORT = 3000 or whatever you would like your port on and your MONGODB_URI=mongodb://localhost/27017:geoSpatialData
6. Open Postman and MongoDB.
7. In Postman, import the collection file provided in GitHub.
8. In MongoDB, start a connection to the local server.
9. To run the requests, enter the information needed for the specific request you want (e.g., GET, POST)
10. Follow along with the code to see specific pieces you would need: For example, to get by location, you would need latitude and longitude for the API to get the location you are looking for with the data.
11. Once you POST, check MongoDB to see that your information was added correctly.
12. You must POST before checking for GET all and GET by ID since these pull from MongoDB instead of the external API.
13. Have fun looking at the different weather types happening worldwide!
<br>

## Routes and API Used:
The routes used for this project are GET by Location, POST, GET All, and GET by ID. The API used for this project was OpenWeatherMap. A key is needed, however it is very easy to get one. Here is the link to the free key that can be used: https://openweathermap.org/price (There is a free key about halfway down the page), or if you are a student you can get the key that is next to the free key which allows for much more.
<br>