import React, { Component } from 'react';
import { connect } from 'react-redux';
// import 'zingchart/es6';
import ZingChart from 'zingchart-react';
// EXPLICITLY IMPORT MODULE from node_modules
// import "zingchart/modules-es6/zingchart-maps.min.js";
// import "zingchart/modules-es6/zingchart-maps-usa.min.js";

class HistogramChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'bar',
        title: {
          'text': this.props.defaultcharts[0].help,
          "font-color": "black",
          "backgroundColor": "none",
          "font-size": "22px",
          "alpha": 1,
          "adjust-layout": true,
        },
        "plot": {
          'border-radius': "9px", /* Rounded Corners */
        },
        "plotarea": {
            "margin": "dynamic"
        },
        "scale-x":{  
          label: {
            text: "Device"
          },
          "values": this.props.defaultcharts[0].labelsArray,  
        },
        "scale-y":{  
          format: '%v ms',
          text: "Amount of Garbage"
        },
        "plot": {
          "bars-space-left": 0.15,
          "bars-space-right": 0.15,
          "animation": {
            "effect": "ANIMATION_SLIDE_BOTTOM",
            "sequence": 0,
            "speed": 800,
            "delay": 800
          }
        },
        "crosshair-x": {
          "line-width": "100%",
          "alpha": 0.18,
          // "plot-label": {
          // //   "header-text": "%kv Pod"
          // }
        },
        series: [{
          values: this.props.defaultcharts[0].valueArray,
          'background-color': "green blue", /* Bar fill color (gradient) */
          "borderRadiusTopLeft": 7,
          alpha: 0.3, /* Transparency (more transparent) */
        }]
      }
    }
  }

  render() {

    return (
      <div>
        <ZingChart id='histogramchart' data={this.state.config}/>
      </div>
    );
  }
}


export default connect(
  state => ({
    defaultcharts: state.metricsReducer.defaultcharts,
    // histogramSelector: state.metricsReducer.histogramSelector,
  }),
  null
)(HistogramChart);






