import React, {Component} from 'react';

import NavBar from './navBar/navBar';


class PageHeader extends Component {

	render() {
		return(
			<div className="header-container">
				<div className="nav-container">
			  <div className="logo-container">
			      <a className="logo" href="/">Crowdcube</a>			      
			  </div>
			  <NavBar />
			  </div>
			</div>
		);
	}
}

export default PageHeader;