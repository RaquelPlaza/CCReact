import React, {Component} from 'react';


class WarningComponent extends Component {

	render() {

		return(
			<div className="warning-container">
				<p>Capital at Risk. Please read our <a href="#" data-reveal-id="cc-modal-risk" data-reveal-ajax=""> risk warning</a> and <a href="#" data-reveal-id="cc-modal-disclaimer" data-reveal-ajax="">disclaimer</a></p>
			</div>
			);

	}


}

export default WarningComponent;