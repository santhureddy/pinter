import React, { Component } from 'react';

class SecondChild extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			data: "Second Child State Data Here"
		};
	}
	
	render() {
		return (
			<div>
				{this.state.data}
				<hr></hr>
				<a onClick={() => this.props.action('Set Second Child state set from FirstChild: ' + Math.floor(Math.random() * 999))}>Update Parent</a>
				<hr></hr>
				<a onClick={() => this.props.action('Set Second Child state set from FirstChild: ' + Math.floor(Math.random() * 999))}>Update Updtae First Child</a>
			</div>
		);
	}

}

export default SecondChild;