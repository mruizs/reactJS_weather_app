import React from "react"

export default class Search extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.search(this.refs.newCity.value)
  } //handleSubmit

  render() {
    return (
      <div id="handleChange" className="col-sm-12 col-lg-9">
        <form id="search-city" onSubmit={this.handleSubmit.bind(this)}>
          <input type="radio" value="metric" checked={this.props.units === 'metric'} onChange={this.props.onUnitsChanged.bind(this)} />
          <label> Celsius</label>
          <input type="radio" value="imperial" checked={this.props.units === 'imperial'} onChange={this.props.onUnitsChanged.bind(this)} />
          <label> Fahrenheit</label>
          <input type="text" name="searchCity" placeholder="Your City Name" ref="newCity" required />
          <input type="submit" id="button" value="Search" />
        </form>
      </div>
    )
  }
}
