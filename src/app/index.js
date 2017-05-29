var React = require('react');
var ReactDOM = require('react-dom');
var Request = require('superagent');
var jsonp = require('superagent-jsonp');

//Create a component
var CityComponent = React.createClass({
    getInitialState: function() {
      return {
        name: '',
        country: ''
      };
      this.SearchCity.search = this.SearchCity.search.bind(this);
    }, //getInitialState

    componentDidMount: function(location) {
      if (!location) { //Initial Location
        this.setState({
          name: 'Granada',
          country: 'ES'
        });
      } else {
        this.setState({
          name: location.name,
          country: location.country
        });
      } //Initial location

      // const { types=['(cities)'] } = this.props;
  		// this.autocomplete = new google.maps.places.Autocomplete(this.refs.location, {
  		//   types,
  		// });
  		// this.autocomplete.addListener('place_changed', this.onSelected); //Autocomplete
    }, //componentDidMount

    handleSearch: function(location) {
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
              <div id="today"></div>
            </div>
            <div id="7days">

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

      var requestUrl = `${url}?q=${newCity}&cnt=${days}&APPID=${apiKey}`;
      console.log(requestUrl);

      Request.get(requestUrl).use(jsonp({
        timeout: 3000,
      })).then(function(res) {
        if (res.body.cod === "200") {
          var newCity = res.body.city.name;
          var newCountry = res.body.city.country;

          this.setState({
            name: newCity,
            country: newCountry
          });
        } else {
          console.log(err);
        }
      }.bind(this));
    } //search
});



ReactDOM.render(<CityComponent />, document.getElementById('city-wrapper'));
