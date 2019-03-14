import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './parent.css';
import FirstChild from './firstChild';
import SecondChild from './secondChild';

class Parent extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			data: "Default Parent State Data Here"
		};
		this.childHandler = this.childHandler.bind(this);
	}
	
	childHandler(dataFromChild) {
			console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
			this.setState({
				data: dataFromChild
			},() => console.log('Updated Parent State:', this.state));
	}
		
	render() {
		return (
		  <div>
				<div className="container-fluid">
					<div className="row">
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Parent Component</h5>
									<div className="card-text">
										{this.state.data}
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">First Child Component</h5>
									<div className="card-text">
										<FirstChild action={this.childHandler} />
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Second Child Component</h5>
									<div className="card-text">
										<SecondChild action={this.childHandler} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		  </div>
		);
	}
}


export default Parent;