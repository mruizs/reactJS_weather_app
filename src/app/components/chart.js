import React from "react"
import {Line as LineChart} from "react-chartjs"

function ChartData() {
  return {
    labels: {this.state.labels},
    datasets: {this.state.graph}
  }
}

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
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

export default class Chart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chartData: {
        data: ChartData()
      }
    }
  }

  render() {
    return (
      <div>
        <LineChart data={this.state.chartData} width={800} height={300} />
      </div>
				// width={400}
				// height={800} />
        // options: {
        //   responsive: true,
        //   tooltips: {
        //     mode: 'index',
        //     intersect: false,
        //   },
        //   hover: {
        //     mode: 'nearest',
        //     intersect: true
        //   },
        //   scales: {
        //     xAxes: [{ display: true }],
        //     yAxes: [{ display: true }]
        //   }
        // } />

				// margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
    )
  }//render
}
