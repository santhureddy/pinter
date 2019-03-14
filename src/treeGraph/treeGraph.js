import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import './treeGraph.css';
import TreeGraphChart from './treeGraphChart';
import axios from 'axios';


const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
	  {
        name: 'Level 2: C',
      },
	  {
        name: 'Level 2: D',
      },
    ],
  },
];

class TreeGraph extends Component {
	
	 //_isMounted = false;
	 
	constructor(props) {
		super(props);
		this.state = {
			chatData: [],
		};
	  }

	componentDidMount() {
		axios.get(`http://localhost:3001/myTreeData`)
			.then(res => {
				const chatData = res.data;
				this.setState({ chatData });
				console.log(chatData);
			  })
		}
		
		componentWillUnmount() {
			//this._isMounted = false;
		 }

	  render() {
		return (
			<div>
				<div id="treeWrapper" style={{width: '50em', height: '100em'}}>
					<Tree data={myTreeData} />
				</div>
			</div>
		);
	  }
}

export default TreeGraph;