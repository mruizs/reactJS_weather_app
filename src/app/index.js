var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var CityComponent = React.createClass({
    getInitialState: function(){
        return {
            cities: ['Granada,ES']
        }
    }, //getInitialState
    render: function(){
      var cities = this.state.cities;
      return(
          <div id="city-list">
              <p>Weather Forecast</p>
              <p>{this.state.cities[0]}</p>
          </div>
      );
    } //render
});

ReactDOM.render(<CityComponent />, document.getElementById('city-wrapper'));
