import React from "react"
import Request from "superagent"
import jsonp from "superagent-jsonp"
import moment from "moment"
import { Line as LineChart } from "react-chartjs-2"

import Header from "./header"
import Today from "./today"
import Prevision from "./prevision"
import Search from "./search"
import Chart from "./chart"

//CSS
import "../css/style.css"

//Create a component
export default class Layout extends React.Component {
    constructor() {
      super()
      this.state = {
        city: {},
        data: [],
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
      // console.log(this.state.data)
      return(
          <div className="container">
            <div className="row">
              <Header city={this.state.city.name} country={this.state.city.country} />
            </div>
            <div id="info" className="row">
              <Today temp={this.state.data} symbol={this.state.symbol} pressure={this.state.avgPressure} />
              <Search units={this.state.units} onUnitsChanged={this.onUnitsChanged.bind(this)} search={this.search.bind(this)} />
              <Chart chartData={this.state.chartData} />
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
      let unit = 'metric'
      let symbol = ''
      if (this.state.units === "imperial") {
        unit = 'imperial'
        symbol = 'ºF'
      } else {
        unit = 'metric'
        symbol = 'ºC'
      }
      const days = 7
      const apiKey = '0c13455f76f055afc22e9a1cf9b67b7c'

      let requestUrl = `${url}?q=${newCity}&cnt=${days}&units=${unit}&APPID=${apiKey}`
      // console.log(requestUrl)

      let data = []

      Request.get(requestUrl).use(jsonp({
        timeout: 3000,
      })).then((res) => {
        if (res.body.cod === "200") {

          let city = {
            name: res.body.city.name,
            country: res.body.city.country
          }

          // let days = []

          for (let i = 0; i<days; i++) {
            data.push({
              dt: moment.unix(res.body.list[i].dt).format("ddd MMM Do"),
              day: Math.round(res.body.list[i].temp.day),
              min: Math.round(res.body.list[i].temp.min),
              max: Math.round(res.body.list[i].temp.max),
              night: Math.round(res.body.list[i].temp.night),
              eve: Math.round(res.body.list[i].temp.eve),
              morn: Math.round(res.body.list[i].temp.morn)
            })
          }

          // console.log(data)

          let day0 = {
            dt: moment.unix(res.body.list[0].dt).format("[Today] MMM Do"),
            day: Math.round(res.body.list[0].temp.day),
            min: Math.round(res.body.list[0].temp.min),
            max: Math.round(res.body.list[0].temp.max),
            night: Math.round(res.body.list[0].temp.night),
            eve: Math.round(res.body.list[0].temp.eve),
            morn: Math.round(res.body.list[0].temp.morn)
          }

          let day1 = {
            dt: moment.unix(res.body.list[1].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[1].temp.day),
            min: Math.round(res.body.list[1].temp.min),
            max: Math.round(res.body.list[1].temp.max),
            night: Math.round(res.body.list[1].temp.night),
            eve: Math.round(res.body.list[1].temp.eve),
            morn: Math.round(res.body.list[1].temp.morn)
          }

          let day2 = {
            dt: moment.unix(res.body.list[2].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[2].temp.day),
            min: Math.round(res.body.list[2].temp.min),
            max: Math.round(res.body.list[2].temp.max),
            night: Math.round(res.body.list[2].temp.night),
            eve: Math.round(res.body.list[2].temp.eve),
            morn: Math.round(res.body.list[2].temp.morn)
          }

          let day3 = {
            dt: moment.unix(res.body.list[3].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[3].temp.day),
            min: Math.round(res.body.list[3].temp.min),
            max: Math.round(res.body.list[3].temp.max),
            night: Math.round(res.body.list[3].temp.night),
            eve: Math.round(res.body.list[3].temp.eve),
            morn: Math.round(res.body.list[3].temp.morn)
          }

          let day4 = {
            dt: moment.unix(res.body.list[4].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[4].temp.day),
            min: Math.round(res.body.list[4].temp.min),
            max: Math.round(res.body.list[4].temp.max),
            night: Math.round(res.body.list[4].temp.night),
            eve: Math.round(res.body.list[4].temp.eve),
            morn: Math.round(res.body.list[4].temp.morn)
          }

          let day5 = {
            dt: moment.unix(res.body.list[5].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[5].temp.day),
            min: Math.round(res.body.list[5].temp.min),
            max: Math.round(res.body.list[5].temp.max),
            night: Math.round(res.body.list[5].temp.night),
            eve: Math.round(res.body.list[5].temp.eve),
            morn: Math.round(res.body.list[5].temp.morn)
          }

          let day6 = {
            dt: moment.unix(res.body.list[6].dt).format("ddd MMM Do"),
            day: Math.round(res.body.list[6].temp.day),
            min: Math.round(res.body.list[6].temp.min),
            max: Math.round(res.body.list[6].temp.max),
            night: Math.round(res.body.list[6].temp.night),
            eve: Math.round(res.body.list[6].temp.eve),
            morn: Math.round(res.body.list[6].temp.morn)
          }

          let chartData = {
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
                  Math.round(res.body.list[0].temp.max),
                  Math.round(res.body.list[1].temp.max),
                  Math.round(res.body.list[2].temp.max),
                  Math.round(res.body.list[3].temp.max),
                  Math.round(res.body.list[4].temp.max),
                  Math.round(res.body.list[5].temp.max),
                  Math.round(res.body.list[6].temp.max)
                ],
                borderColor: '#e24040',
                backgroundColor: 'rgba(226, 64, 64, 0)'
              },
              {
                label: "Min",
                data: [
                  Math.round(res.body.list[0].temp.min),
                  Math.round(res.body.list[1].temp.min),
                  Math.round(res.body.list[2].temp.min),
                  Math.round(res.body.list[3].temp.min),
                  Math.round(res.body.list[4].temp.min),
                  Math.round(res.body.list[5].temp.min),
                  Math.round(res.body.list[6].temp.min)
                ],
                borderColor: '#40d0e2',
                backgroundColor: 'rgba(226, 64, 64, 0)'
              }
            ]
          }

          let pressure = 0
          for (let j = 0; j<days; j++) {
            pressure += res.body.list[j].pressure
          }
          let avgPressure = Math.round(pressure/days)

          this.setState({
            city: city,
            data: data,
            day0: day0,
            day1: day1,
            day2: day2,
            day3: day3,
            day4: day4,
            day5: day5,
            day6: day6,
            symbol: symbol,
            chartData: chartData,
            avgPressure: avgPressure
          })
          // console.log(this.state.data[0])
        }
      })
    } //search
}
