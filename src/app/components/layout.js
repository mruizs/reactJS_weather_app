import React from "react"
import Request from "superagent"
import jsonp from "superagent-jsonp"
import moment from "moment"
import { Line as LineChart } from "react-chartjs"

import Header from "./header"
import Today from "./today"
import Prevision from "./prevision"
import Search from "./search"
//import Chart from "./chart"

//CSS
import "../css/style.css"

//ChartData
// function ChartData() {
//   return {
//     labels: {this.state.labels},
//     datasets: {this.state.graph}
//   }
// }

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true//,
  //legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const styles = {
  graphContainer: {
    border: '1px solid black',
    padding: '15px'
  }
}

//Create a component
export default class Layout extends React.Component {
    constructor() {
      super()
      this.state = {
        city: {},
        day0: {},
        day1: {},
        day2: {},
        day3: {},
        day4: {},
        day5: {},
        day6: {},
        symbol: 'ºC',
        units: 'metric',
        avgPressure: '',
        chartData: {}
      }
    } //constructor

    componentDidMount(location) {
        this.search('Granada') //Initial Location
    } //componentDidMount

    render(){
      console.log(options)
      return(
          <div className="container">
            <div className="row">
              <Header city={this.state.city.name} country={this.state.city.country} />
            </div>
            <div id="info" className="row">
              <Today temp={this.state.day0} symbol={this.state.symbol} pressure={this.state.avgPressure} />
              <Search units={this.state.units} onUnitsChanged={this.onUnitsChanged.bind(this)} search={this.search.bind(this)} />
              <LineChart
                data={this.state.chartData}
                options={options}
                width={800}
                height={300}
              />
            </div>
            <Prevision day1={this.state.day1} day2={this.state.day2} day3={this.state.day3} day4={this.state.day4} day5={this.state.day5} day6={this.state.day6} symbol={this.state.symbol} />
          </div>
      )
    } //render

    onUnitsChanged(changeEvent) {
      this.setState ({
        units: changeEvent.target.value
      })
    } //onUnitsChanged

    search(newCity) {
      const url = 'http://api.openweathermap.org/data/2.5/forecast/daily'
      var unit = 'metric'
      var symbol = ''
      if (this.state.units === "imperial") {
        unit = 'imperial'
        symbol = 'ºF'
      } else {
        unit = 'metric'
        symbol = 'ºC'
      }
      const days = 7
      const apiKey = '0c13455f76f055afc22e9a1cf9b67b7c'

      var requestUrl = `${url}?q=${newCity}&cnt=${days}&units=${unit}&APPID=${apiKey}`
      // console.log(requestUrl)

      Request.get(requestUrl).use(jsonp({
        timeout: 3000,
      })).then(function(res) {
        if (res.body.cod === "200") {

          var city = {
            name: res.body.city.name,
            country: res.body.city.country
          }

          var day0 = {
            dt: moment.unix(res.body.list[0].dt).format("[Today] MMM Do"),
            day: Math.round(res.body.list[0].temp.day),
            min: Math.round(res.body.list[0].temp.min),
            max: Math.round(res.body.list[0].temp.max),
            night: Math.round(res.body.list[0].temp.night),
            eve: Math.round(res.body.list[0].temp.eve),
            morn: Math.round(res.body.list[0].temp.morn)
          }

          var day1 = {
            dt: moment.unix(res.body.list[1].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[1].temp.day),
            min: Math.round(res.body.list[1].temp.min),
            max: Math.round(res.body.list[1].temp.max),
            night: Math.round(res.body.list[1].temp.night),
            eve: Math.round(res.body.list[1].temp.eve),
            morn: Math.round(res.body.list[1].temp.morn)
          }

          var day2 = {
            dt: moment.unix(res.body.list[2].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[2].temp.day),
            min: Math.round(res.body.list[2].temp.min),
            max: Math.round(res.body.list[2].temp.max),
            night: Math.round(res.body.list[2].temp.night),
            eve: Math.round(res.body.list[2].temp.eve),
            morn: Math.round(res.body.list[2].temp.morn)
          }

          var day3 = {
            dt: moment.unix(res.body.list[3].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[3].temp.day),
            min: Math.round(res.body.list[3].temp.min),
            max: Math.round(res.body.list[3].temp.max),
            night: Math.round(res.body.list[3].temp.night),
            eve: Math.round(res.body.list[3].temp.eve),
            morn: Math.round(res.body.list[3].temp.morn)
          }

          var day4 = {
            dt: moment.unix(res.body.list[4].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[4].temp.day),
            min: Math.round(res.body.list[4].temp.min),
            max: Math.round(res.body.list[4].temp.max),
            night: Math.round(res.body.list[4].temp.night),
            eve: Math.round(res.body.list[4].temp.eve),
            morn: Math.round(res.body.list[4].temp.morn)
          }

          var day5 = {
            dt: moment.unix(res.body.list[5].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[5].temp.day),
            min: Math.round(res.body.list[5].temp.min),
            max: Math.round(res.body.list[5].temp.max),
            night: Math.round(res.body.list[5].temp.night),
            eve: Math.round(res.body.list[5].temp.eve),
            morn: Math.round(res.body.list[5].temp.morn)
          }

          var day6 = {
            dt: moment.unix(res.body.list[6].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[6].temp.day),
            min: Math.round(res.body.list[6].temp.min),
            max: Math.round(res.body.list[6].temp.max),
            night: Math.round(res.body.list[6].temp.night),
            eve: Math.round(res.body.list[6].temp.eve),
            morn: Math.round(res.body.list[6].temp.morn)
          }

          var chartData = {
            labels: [
              moment.unix(res.body.list[0].dt).format("ddd"),
              moment.unix(res.body.list[1].dt).format("ddd"),
              moment.unix(res.body.list[2].dt).format("ddd"),
              moment.unix(res.body.list[3].dt).format("ddd"),
              moment.unix(res.body.list[4].dt).format("ddd"),
              moment.unix(res.body.list[5].dt).format("ddd"),
              moment.unix(res.body.list[6].dt).format("ddd")
            ],
            datasets: [
              {
                label: "Max",
                data: [
                  res.body.list[0].temp.max,
                  res.body.list[1].temp.max,
                  res.body.list[2].temp.max,
                  res.body.list[3].temp.max,
                  res.body.list[4].temp.max,
                  res.body.list[5].temp.max,
                  res.body.list[6].temp.max
                ]
              },
              {
                label: "Min",
                values: [
                  res.body.list[0].temp.min,
                  res.body.list[1].temp.min,
                  res.body.list[2].temp.min,
                  res.body.list[3].temp.min,
                  res.body.list[4].temp.min,
                  res.body.list[5].temp.min,
                  res.body.list[6].temp.min
                ]
              }
            ]
          }

          this.setState({
            city: city,
            day0: day0,
            day1: day1,
            day2: day2,
            day3: day3,
            day4: day4,
            day5: day5,
            day6: day6,
            symbol: symbol,
            chartData: chartData
          })

          var pressure = 0
          for (var j = 0; j<days; j++) {
            pressure += res.body.list[j].pressure
          }
          var avgPressure = Math.round(pressure/days)
          this.setState({
            avgPressure
          })
        } else {
          console.log(err)
        }
      }.bind(this))
    } //search
}
