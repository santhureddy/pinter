import React, { Component } from 'react';
import './dashboard.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
        <div>
            <div className="row">
			  <div className="col-sm-3">
				<ul>
				  <li><Link to={'/inner'} className="nav-link"> Inner </Link></li>
				  <li><a href="#">Links</a></li>
				  <li><a href="#">Links</a></li>
				  <li><a href="#">Links</a></li>
				</ul>
			  </div>
			  <div className="col-sm-9">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h2>Heading</h2>
								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
								<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
							</div>
							<div className="col-md-6">
								<h2>Heading</h2>
								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
								<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
							</div>
						</div>
					</div>
			  </div>
			</div>
        </div>
    );
  }
}

export default Dashboard;