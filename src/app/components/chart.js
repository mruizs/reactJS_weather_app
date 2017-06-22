import React from "react"
import {Line as LineChart} from "react-chartjs-2"


export default class Chart extends React.Component {
  render() {
    // console.log(options)
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
      datasetFill: false
    }

    const styles = {
      graphContainer: {
        border: '1px solid black',
        padding: '15px'
      }
    }

    return (
      <div id="chart" className="col-sm-12 col-lg-9">
        <LineChart
          data={this.props.chartData}
          options={options}
          styles={styles}
          width={800}
          height={300} />
      </div>
    )
  }//render
}
