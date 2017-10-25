import React, {Component} from 'react';

import PageHeader from '../../common/pageHeader/pageHeader';
import FiltersComponent from '../../common/filters/filters';
import SortingComponent from '../../common/sorting/sorting';
import WarningComponent from '../../common/warning/warning';

import InvestmentOpportunity from '../../pages/investmentsPage/investmentOpportunity/investmentOpportunity';

class InvestmentsPage extends Component {

	render() {
		return (
			<section>
				<PageHeader />
				<div className="page-container">
					<div className="filter-header">
					  	<div className="page-title"><h2>{this.props.pageTitle}</h2></div>
						<FiltersComponent />
					</div>
					<div className="sorting-container">
						<SortingComponent />
						<WarningComponent />
					</div>
					<InvestmentOpportunity />
				</div>
			</section>
			);
	}

}

export default InvestmentsPage;
