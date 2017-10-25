import React, {Component} from 'react';

class InvestmentOpportunity extends Component {

	constructor(props) {
		super(props);

		this.state = {
			opps: [
			  { 
			  	title: "field & flower", 
			  	desc: "Delivering grass fed, free range meat boxes to over 4,500 active subscription customers, field&amp;flower have become a trusted retailer of ethical meat, sustainable fish &amp; cheese. Profitable with 16/17 revenue of £2.7m, they are now looking to expand their reach and become a major online food retailer", 
			  	cover: "https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21537/201710/fa43a1d241d2d5cc1ade6477de5015b6.jpg", 
			  	logo: "https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_fe6fc35191bf39dbff98fc68c8f01e51.jpg" 
			  },
			  { 
			  	title: "Kokoon", 
			  	desc: "VC backed and with one of the UK's largest Kickstarter campaigns, Kokoon use clinically validated audio and EEG sensors in their headphones to aid sleep & relaxation. Product development is now complete, they’ve been approached by a number of leading retailers & have signed distribution agreements." 
			  }
			]
		}
	}



	componentDidMount() {

  }

	render() {

		var listItems = this.state.opps.map(function(item, index) {

			var coverStyle = {
			  backgroundImage: 'url(' + item.cover + ')'
			};

	      return (
			<div className="col col-xs-12 col-sm-6 col-md-4" key={index}>
			<div className="list-item-container">
			    <a className="list-item" href="/">  
			    	<div className="list-item-top">      
				    	<div className="cover-image" style={coverStyle}>
				        </div>
		            	<div className="logo-container">
		                	<img className="logo-image" src={item.logo} alt="" />
		                    <div className="tags">
		                        <ul>
		                        	<li><span className="tag small">
		                    				<abbr title="Enterprise Investment Scheme">EIS</abbr>
		    							</span>
									</li>
								</ul>                    
							</div>
		                    <div className="list-days-left">10 days left</div>
		                </div>
			        </div>
			        <div className="list-item-body">
			            <h1>{item.title}</h1>
			            <p>{item.desc}</p>
			        </div>			                                  
			    </a> 
			    </div>           
			</div>
		
	      );
	    });

		return(
		
		<div className="row list-container">
		
			{listItems}
			
		</div>
		);
	}


}

export default InvestmentOpportunity;
