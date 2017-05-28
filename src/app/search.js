var React = require('react');
var ReactDOM = require('react-dom');
var getWeather = require('./getWeather');

var SearchCity = React.createClass({
  render: function(){
    return(
      <form id="search-city" onSubmit={this.handleSubmit}>
        <input type="text" name="searchCity" ref="newCity" required />
        <input type="submit" value="Search" />
      </form>
    );
  },

  //Custom functions
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onChange(this.refs.newCity.value);
  }, //handleSubmit

  componentDidMount: function() {
		const { types=['(cities)'] } = this.props;
		this.autocomplete = new google.maps.places.Autocomplete(this.refs.location, {
		  types,
		});
		this.autocomplete.addListener('place_changed', this.onSelected);
  }, //componentDidMount

  handleSearch: function(location) {
    
  } //handleSearch
});

module.exports = SearchCity;
