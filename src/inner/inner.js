import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'


class Inner extends Component {
	
	constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }
  
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  
  render() {
    return (
	    <div>
			<div className="col-md-6">
				<h2>Inner</h2>
				<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
				<p><a className="btn btn-secondary" onClick={this.handleShow} role="button">View details &raquo;</a></p>
				<Modal show={this.state.show} onHide={this.handleClose}>
				  <Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				  </Modal.Header>
				  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				  <Modal.Footer>
					<a variant="secondary" onClick={this.handleClose}>
					  Close
					</a>
					<a variant="primary" onClick={this.handleClose}>
					  Save Changes
					</a>
				  </Modal.Footer>
				</Modal>
			</div>
	    </div>
    );
  }
}

export default Inner;