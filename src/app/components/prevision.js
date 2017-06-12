import React from "react"

export default class Prevision extends React.Component {
  render() {
    return (
      <div id="prevision">
        <div id="day1">
          <h2>{this.props.day1.dt}</h2>
          <p>Max: {this.props.day1.max} {this.props.symbol}</p>
          <p>Min: {this.props.day1.min} {this.props.symbol}</p>
          <p>Morning: {this.props.day1.morn} {this.props.symbol}</p>
          <p>Evening: {this.props.day1.eve} {this.props.symbol}</p>
          <p>Night: {this.props.day1.night} {this.props.symbol}</p>
        </div>
        <div id="day2">
          <h2>{this.props.day2.dt}</h2>
          <p>Max: {this.props.day2.max} {this.props.symbol}</p>
          <p>Min: {this.props.day2.min} {this.props.symbol}</p>
          <p>Morning: {this.props.day2.morn} {this.props.symbol}</p>
          <p>Evening: {this.props.day2.eve} {this.props.symbol}</p>
          <p>Night: {this.props.day2.night} {this.props.symbol}</p>
        </div>
        <div id="day3">
          <h2>{this.props.day3.dt}</h2>
          <p>Max: {this.props.day3.max} {this.props.symbol}</p>
          <p>Min: {this.props.day3.min} {this.props.symbol}</p>
          <p>Morning: {this.props.day3.morn} {this.props.symbol}</p>
          <p>Evening: {this.props.day3.eve} {this.props.symbol}</p>
          <p>Night: {this.props.day3.night} {this.props.symbol}</p>
        </div>
        <div id="day4">
          <h2>{this.props.day4.dt}</h2>
          <p>Max: {this.props.day4.max} {this.props.symbol}</p>
          <p>Min: {this.props.day4.min} {this.props.symbol}</p>
          <p>Morning: {this.props.day4.morn} {this.props.symbol}</p>
          <p>Evening: {this.props.day4.eve} {this.props.symbol}</p>
          <p>Night: {this.props.day4.night} {this.props.symbol}</p>
        </div>
        <div id="day5">
          <h2>{this.props.day5.dt}</h2>
          <p>Max: {this.props.day5.max} {this.props.symbol}</p>
          <p>Min: {this.props.day5.min} {this.props.symbol}</p>
          <p>Morning: {this.props.day5.morn} {this.props.symbol}</p>
          <p>Evening: {this.props.day5.eve} {this.props.symbol}</p>
          <p>Night: {this.props.day5.night} {this.props.symbol}</p>
        </div>
        <div id="day6">
          <h2>{this.props.day6.dt}</h2>
          <p>Max: {this.props.day6.max} {this.props.symbol}</p>
          <p>Min: {this.props.day6.min} {this.props.symbol}</p>
          <p>Morning: {this.props.day6.morn} {this.props.symbol}</p>
          <p>Evening: {this.props.day6.eve} {this.props.symbol}</p>
          <p>Night: {this.props.day6.night} {this.props.symbol}</p>
        </div>
      </div>
    )
  }
}
