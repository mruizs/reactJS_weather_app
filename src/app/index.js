var React = require('react');
var ReactDOM = require('react-dom');
var getWeather = require('./getWeather');

//Module requires
var SearchCity = require('./search')


//Create a component
var CityComponent = React.createClass({
    getInitialState: function(){
      return {
          city: 'Granada',
          country: 'ES'
      }
    }, //getInitialState

    render: function(){
      var city = this.state.city;
      return(
          <div id="city-list">
            <header>
              <p>Weather Forecast</p>
              <p>{this.state.city}, {this.state.country}</p>
            </header>
            <div>
              <div id="search">
                <SearchCity onChange={this.onChange} />
              </div>
              <div id="today"></div>
            </div>
            <div id="7days">

            </div>
          </div>
      );
    }, //render

    //Custom functions
    onChange: function(newCity){
      var actualCity = this.state.city;
      //console.log(newCity);
      actualCity = newCity;
      return(
        getWeather.getWeather(actualCity)
      );
    } //onChange
});



ReactDOM.render(<CityComponent />, document.getElementById('city-wrapper'));

module.exports = CityComponent;
