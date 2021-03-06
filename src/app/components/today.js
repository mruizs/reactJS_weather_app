import React from "react"

export default class Today extends React.Component {
  render() {
    let today = this.props.temp[1]
    console.log(today)
    return (
      <div id="today" className="col-sm-12 col-lg-3">
        <h2>{this.props.temp.dt}</h2>
        <p>Now: {this.props.temp.day} {this.props.symbol}</p>
        <p>Max: {this.props.temp.max} {this.props.symbol}</p>
        <p>Min: {this.props.temp.min} {this.props.symbol}</p>
        <p>Morning: {this.props.temp.morn} {this.props.symbol}</p>
        <p>Evening: {this.props.temp.eve} {this.props.symbol}</p>
        <p>Night: {this.props.temp.night} {this.props.symbol}</p>
        <p>Avg. Pressure for this week: {this.props.pressure}hpa</p>
      </div>
    )
  }
}
