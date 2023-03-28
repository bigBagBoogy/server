# Welcome at the simplest server!

In the public/geolocate.html page, if you hit ctrl+shift+i
and click on the 3 dots
choose "sensors"
Here you can spoof your location

## made a new account for weather api:  docs: https://www.weatherapi.com/docs/

# Request URL
Request to WeatherAPI.com API consists of base url and API method. You can make both HTTP or HTTPS request to our API.

Base URL: http://api.weatherapi.com/v1

for current weather: http://api.weatherapi.com/v1/current.json

# so like this maybe?   
  const api_key = process.env.API_KEY;
  const weather_url = `https://api.darksky.net/forecast/${api_key}/q=${lat},${lon}
  const weather_response = await fetch(weather_url);
  const weather_data = await weather_response.json();

  here is the link to the old weatherAPI setup by coding train:
 #  https://github.com/CodingTrain/Intro-to-Data-APIs-JS/blob/source/module3/the_weather_here/index.js
