import React, { Component } from 'react';

class FirstChild extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			data: "First Child State Data Here"
		};
	}
	
	render() {
		return (
			<div>
				{this.state.data}
				<hr></hr>
				<a onClick={() => this.props.action('Set Parent state set from FirstChild: ' + Math.floor(Math.random() * 999))}>Update Parent</a>
			</div>
		);
	}

}

export default FirstChild;