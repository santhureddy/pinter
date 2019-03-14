import React, { Component } from 'react';
import './graph.css';
import BarChart from './BarChart';


class Graph extends Component {
  render() {
    return (
        <div>
          <BarChart colorBars height={150} width={650} data={[5,10,1,3]} size={[500,500]} />
        </div>
    );
  }
}

export default Graph;