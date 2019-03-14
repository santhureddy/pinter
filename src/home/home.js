import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
	    <div>
        <div className="container-fluid">
			<div className="row">
					<div className="col">
						<Link to={'/dashboard'} className="nav-link">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Dashboard</h5>
									<p className="card-text">At Intuit, innovation is everyone’s job, no matter where they are across the globe. We live and breathe it in India. And we supercharge it at grassroots level with techniques that build innovation muscle, inspiring new ideas locally and for our partners abroad.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col">
						<Link to={'/graph'} className="nav-link">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Graph</h5>
									<p className="card-text">At Intuit, innovation is everyone’s job, no matter where they are across the globe. We live and breathe it in India. And we supercharge it at grassroots level with techniques that build innovation muscle, inspiring new ideas locally and for our partners abroad.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col">
						<Link to={'/treeGraph'} className="nav-link">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Tree Graph</h5>
									<p className="card-text">At Intuit, innovation is everyone’s job, no matter where they are across the globe. We live and breathe it in India. And we supercharge it at grassroots level with techniques that build innovation muscle, inspiring new ideas locally and for our partners abroad.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col">
						<Link to={'/parent'} className="nav-link">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Parent and Child</h5>
									<p className="card-text">At Intuit, innovation is everyone’s job, no matter where they are across the globe. We live and breathe it in India. And we supercharge it at grassroots level with techniques that build innovation muscle, inspiring new ideas locally and for our partners abroad.</p>
								</div>
							</div>
						</Link>
					</div>
			    </div>
		    </div>
	    </div>
    );
  }
}

export default Home;