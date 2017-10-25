import React, {Component} from 'react';


class SortingComponent extends Component {

	render() {

		return(
			<div>
				<form id="cc-opportunities__sortBy" className="sorting" action="/" method="GET">
				    <label className="sorting-label" htmlFor="sorting">Sort by</label>
				    <select id="sorting-field" name="order" className="sorting-dropdown">
				                    <option value="last_investment">Most recent investment</option>
				                    <option value="date_activated">Newest</option>
				                    <option value="percentage">Percentage raised</option>
				                    <option value="amount_raised">Amount raised</option>
				            </select>
				    <input className="sorting-submit" type="submit" value="Sort" />
				</form>
			</div>
			);

	}


}

export default SortingComponent;