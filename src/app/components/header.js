import React from "react"

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="today" className="col-sm-12">
          <h1>Weather Forecast</h1>
          <h2>{this.props.city}, {this.props.country}</h2>
        </div>
      </header>
    )
  }
}
