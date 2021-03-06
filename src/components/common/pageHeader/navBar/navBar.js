import React, {Component} from 'react';

import './navBar.css';

class NavBar extends Component {

	render() {

		return(
			<div className="nav">
				<ul className="primary-nav">
					<li>
					<a href="#">Investment opportunities</a>
					</li>
					<li>
						<a href="#">How it works</a>
					</li>
					<li>
						<a href="#">Explore</a>
					</li>
				</ul>
				<ul className="user-nav">
					<li>
						<a href="#">Log in</a>
					</li>
					<li>
						<a href="#">Join</a>
					</li>
				</ul>
			</div>
		);

	}

}

export default NavBar;