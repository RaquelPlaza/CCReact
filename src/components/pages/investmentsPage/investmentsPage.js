import React, {Component} from 'react';

import PageHeader from '../../common/pageHeader/pageHeader';

import InvestmentOpportunity from '../../pages/investmentsPage/investmentOpportunity/investmentOpportunity';

class InvestmentsPage extends Component {

	render() {
		return (
			<section>
				<PageHeader />
				<div className="container">
					<div className="row filter-container">
					  	<div className="col col-xs-12 col-md-6 page-title"><h2>{this.props.pageTitle}</h2></div>
						<div className="col col-xs-6 col-md-3">Search</div>
						<div className="col col-xs-6 col-md-3">Filter</div>
					</div>
					<div className="row sorting-container">
						<div className="">sorting</div>
						<div className="">Another thing</div>
					</div>
					<InvestmentOpportunity />
				</div>
			</section>
			);
	}

}

export default InvestmentsPage;
