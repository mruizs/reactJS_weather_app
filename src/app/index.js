var React = require('react');
var ReactDOM = require('react-dom');
var Request = require('superagent');
var jsonp = require('superagent-jsonp');
var bootstrap = require('react-bootstrap');
var moment = require('moment');

//Create a component
var CityComponent = React.createClass({
    getInitialState: function() {
      return {
        name: '',
        country: '',
        today_day: '',
        today_min: '',
        today_max: '',
        today_night: '',
        today_eve: '',
        today_morn: '',
        day1: '',
        day1_min: '',
        day1_max: '',
        day1_night: '',
        day1_eve: '',
        day1_morn: '',
        day2: '',
        day2_min: '',
        day2_max: '',
        day2_night: '',
        day2_eve: '',
        day2_morn: '',
        day3: '',
        day3_min: '',
        day3_max: '',
        day3_night: '',
        day3_eve: '',
        day3_morn: '',
        day4: '',
        day4_min: '',
        day4_max: '',
        day4_night: '',
        day4_eve: '',
        day4_morn: '',
        day5: '',
        day5_min: '',
        day5_max: '',
        day5_night: '',
        day5_eve: '',
        day5_morn: '',
        day6: '',
        day6_min: '',
        day6_max: '',
        day6_night: '',
        day6_eve: '',
        day6_morn: ''
      };
      this.SearchCity.search = this.SearchCity.search.bind(this);
    }, //getInitialState

    componentDidMount: function(location) {
      if (!location) { //Initial Location
        this.search('Granada');
      } else {
        this.setState({
          name: location.name,
          country: location.country
        });
      //this.handleSubmit('Granada');
      } //Initial location

      // const { types=['(cities)'] } = this.props;
  		// this.autocomplete = new google.maps.places.Autocomplete(this.refs.location, {
  		//   types,
  		// });
  		// this.autocomplete.addListener('place_changed', this.onSelected); //Autocomplete
    }, //componentDidMount

    render: function(){
      return(
          <div id="city-list">
            <header>
              <p>Weather Forecast</p>
              <p>{this.state.name}, {this.state.country}</p>
            </header>
            <div>
              <div id="handleChange">
                <form id="search-city" onSubmit={this.handleSubmit}>
                  <input type="text" name="searchCity" ref="newCity" required />
                  <input type="submit" value="Search" />
                </form>
              </div>
              <div id="today">
                <h2>Today</h2>
                <p>Now: {this.state.today_day}</p>
                <p>Temperature maximum: {this.state.today_max}</p>
                <p>Temperature minimum: {this.state.today_min}</p>
                <p>Temperature during morning: {this.state.today_morn}</p>
                <p>Temperature during evening: {this.state.today_eve}</p>
                <p>Temperature during night: {this.state.today_night}</p>
              </div>
            </div>
            <div id="7days">
              <div id="day1">
                <h2>{this.state.day1}</h2>
                <p>Temperature minimum: {this.state.day1_min}</p>
                <p>Temperature maximum: {this.state.day1_max}</p>
                <p>Temperature during morning: {this.state.day1_morn}</p>
                <p>Temperature during evening: {this.state.day1_eve}</p>
                <p>Temperature during night: {this.state.day1_night}</p>
              </div>
              <div id="day2">
                <h2>{this.state.day2}</h2>
                <p>Temperature minimum: {this.state.day2_min}</p>
                <p>Temperature maximum: {this.state.day2_max}</p>
                <p>Temperature during morning: {this.state.day2_morn}</p>
                <p>Temperature during evening: {this.state.day2_eve}</p>
                <p>Temperature during night: {this.state.day2_night}</p>
              </div>
              <div id="day3">
                <h2>{this.state.day3}</h2>
                <p>Temperature minimum: {this.state.day3_min}</p>
                <p>Temperature maximum: {this.state.day3_max}</p>
                <p>Temperature during morning: {this.state.day3_morn}</p>
                <p>Temperature during evening: {this.state.day3_eve}</p>
                <p>Temperature during night: {this.state.day3_night}</p>
              </div>
              <div id="day4">
                <h2>{this.state.day4}</h2>
                <p>Temperature minimum: {this.state.day4_min}</p>
                <p>Temperature maximum: {this.state.day4_max}</p>
                <p>Temperature during morning: {this.state.day4_morn}</p>
                <p>Temperature during evening: {this.state.day4_eve}</p>
                <p>Temperature during night: {this.state.day4_night}</p>
              </div>
              <div id="day5">
                <h2>{this.state.day5}</h2>
                <p>Temperature minimum: {this.state.day5_min}</p>
                <p>Temperature maximum: {this.state.day5_max}</p>
                <p>Temperature during morning: {this.state.day5_morn}</p>
                <p>Temperature during evening: {this.state.day5_eve}</p>
                <p>Temperature during night: {this.state.day5_night}</p>
              </div>
              <div id="day6">
                <h2>{this.state.day6}</h2>
                <p>Temperature minimum: {this.state.day6_min}</p>
                <p>Temperature maximum: {this.state.day6_max}</p>
                <p>Temperature during morning: {this.state.day6_morn}</p>
                <p>Temperature during evening: {this.state.day6_eve}</p>
                <p>Temperature during night: {this.state.day6_night}</p>
              </div>
            </div>
          </div>
      );
    }, //render

    //Custom functions
    handleSubmit: function(e) {
      e.preventDefault();
      this.search(this.refs.newCity.value);
    }, //handleSubmit

    search: function(newCity) {
      const url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
      const unit = 'metric';
      const days = 7;
      var apiKey = '0c13455f76f055afc22e9a1cf9b67b7c';

      var requestUrl = `${url}?q=${newCity}&cnt=${days}&&units=${unit}&APPID=${apiKey}`;
      console.log(requestUrl);

      Request.get(requestUrl).use(jsonp({
        timeout: 3000,
      })).then(function(res) {
        if (res.body.cod === "200") {
          var newCity = res.body.city.name;
          var newCountry = res.body.city.country;
          var newToday_day = res.body.list[0].temp.day;
          var newToday_min = res.body.list[0].temp.min;
          var newToday_max = res.body.list[0].temp.max;
          var newToday_night = res.body.list[0].temp.night;
          var newToday_eve = res.body.list[0].temp.eve;
          var newToday_morn = res.body.list[0].temp.morn;
          var newDay1 = moment.unix(res.body.list[1].dt).format("ddd MMM Do");
          var newDay1_min = res.body.list[1].temp.min;
          var newDay1_max = res.body.list[1].temp.max;
          var newDay1_night = res.body.list[1].temp.night;
          var newDay1_eve = res.body.list[1].temp.eve;
          var newDay1_morn = res.body.list[1].temp.morn;
          var newDay2 = moment.unix(res.body.list[2].dt).format("ddd MMM Do");
          var newDay2_min = res.body.list[2].temp.min;
          var newDay2_max = res.body.list[2].temp.max;
          var newDay2_night = res.body.list[2].temp.night;
          var newDay2_eve = res.body.list[2].temp.eve;
          var newDay2_morn = res.body.list[2].temp.morn;
          var newDay3 = moment.unix(res.body.list[3].dt).format("ddd MMM Do");
          var newDay3_min = res.body.list[3].temp.min;
          var newDay3_max = res.body.list[3].temp.max;
          var newDay3_night = res.body.list[3].temp.night;
          var newDay3_eve = res.body.list[3].temp.eve;
          var newDay3_morn = res.body.list[3].temp.morn;
          var newDay4 = moment.unix(res.body.list[4].dt).format("ddd MMM Do");
          var newDay4_min = res.body.list[4].temp.min;
          var newDay4_max = res.body.list[4].temp.max;
          var newDay4_night = res.body.list[4].temp.night;
          var newDay4_eve = res.body.list[4].temp.eve;
          var newDay4_morn = res.body.list[4].temp.morn;
          var newDay5 = moment.unix(res.body.list[5].dt).format("ddd MMM Do");
          var newDay5_min = res.body.list[5].temp.min;
          var newDay5_max = res.body.list[5].temp.max;
          var newDay5_night = res.body.list[5].temp.night;
          var newDay5_eve = res.body.list[5].temp.eve;
          var newDay5_morn = res.body.list[5].temp.morn;
          var newDay6 = moment.unix(res.body.list[6].dt).format("ddd MMM Do");
          var newDay6_min = res.body.list[6].temp.min;
          var newDay6_max = res.body.list[6].temp.max;
          var newDay6_night = res.body.list[6].temp.night;
          var newDay6_eve = res.body.list[6].temp.eve;
          var newDay6_morn = res.body.list[6].temp.morn;


          this.setState({
            name: newCity,
            country: newCountry,
            today_day: newToday_day,
            today_min: newToday_min,
            today_max: newToday_max,
            today_night: newToday_night,
            today_eve: newToday_eve,
            today_morn: newToday_morn,
            day1: newDay1,
            day1_min: newDay1_min,
            day1_max: newDay1_max,
            day1_night: newDay1_night,
            day1_eve: newDay1_eve,
            day1_morn: newDay1_morn,
            day2: newDay2,
            day2_min: newDay2_min,
            day2_max: newDay2_max,
            day2_night: newDay2_night,
            day2_eve: newDay2_eve,
            day2_morn: newDay2_morn,
            day3: newDay3,
            day3_min: newDay3_min,
            day3_max: newDay3_max,
            day3_night: newDay3_night,
            day3_eve: newDay3_eve,
            day3_morn: newDay3_morn,
            day4: newDay4,
            day4_min: newDay4_min,
            day4_max: newDay4_max,
            day4_night: newDay4_night,
            day4_eve: newDay4_eve,
            day4_morn: newDay4_morn,
            day5: newDay5,
            day5_min: newDay5_min,
            day5_max: newDay5_max,
            day5_night: newDay5_night,
            day5_eve: newDay5_eve,
            day5_morn: newDay5_morn,
            day6: newDay6,
            day6_min: newDay6_min,
            day6_max: newDay6_max,
            day6_night: newDay6_night,
            day6_eve: newDay6_eve,
            day6_morn: newDay6_morn
          });
        } else {
          console.log(err);
        }
      }.bind(this));
    } //search
});



ReactDOM.render(<CityComponent />, document.getElementById('city-wrapper'));
