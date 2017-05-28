var Request = require('superagent');

const url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
const unit = 'metric';
const days = 7;
//?q=${place}&cnt=7&units=metric&APPID=`;

module.exports = {
  getWeather: function(location) {
    var apiKey = '0c13455f76f055afc22e9a1cf9b67b7c';
    const searchCity = location;

    var requestUrl = `${url}?q=${searchCity}&cnt=${days}&APPID=${apiKey}`;

    Request.get(url).then((response), function() {
      this.setState({
        city: response.body.city.name,
        country: response.body.country
      });
    });
  }
}
