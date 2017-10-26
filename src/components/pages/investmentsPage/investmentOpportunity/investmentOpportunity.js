import React, {Component} from 'react';

import './investmentOpportunity.css';

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
			  	desc: "VC backed and with one of the UK's largest Kickstarter campaigns, Kokoon use clinically validated audio and EEG sensors in their headphones to aid sleep & relaxation. Product development is now complete, they’ve been approached by a number of leading retailers & have signed distribution agreements.", 
			  	cover: "https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21645/201710/fe019a9ba3151522b0448eb3acc77e75.jpg",
			  	logo: "https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/crowdcube_7958c41147bc53783a91ccae698e9092.jpg"

			  },
			  { 
			  	title: "The Good Egg", 
			  	desc: "After sell-out pop-ups/food markets prior to a successful 2014 Crowdcube raise, The Good Egg now serve over 1000 customers a week in their N16 restaurant and are raising again to bring their all-day neighbourhood Montreal-deli-meets-Israeli street-food offer to a second, larger restaurant in Soho.", 
			  	cover: "https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21605/201709/cover_161ecab5a185efd1747c009977efce03.jpg",
			  	logo: "https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_3b4692fe212d1b4d8d6926ad0fec0259.jpg"

			  },
			  { 
			  	title: "BrewBroker", 
			  	desc: "BrewBroker aims to be the world’s biggest brewer, all without owning a brewery. Our online marketplace will enable anyone to buy & sell brewing services, making beer production smarter, more accessible & more profitable. Funding will be used for the continued development and launch of the platform.", 
			  	cover: "https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21475/201709/19d90f7220d00d00bf8e48c5c173bb30.jpg", 
			  	logo: "https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_9ebb2dbfd0d84e26083d1a9addc9149b.jpg" 
			  },
			  { 
			  	title: "Shaw Academy", 
			  	desc: "Founded in 2014, Shaw Academy is an online education provider which teaches a variety of subjects live through their bespoke software platform. Having taught over 4,000,000 students from all over the world, they are currently growing by 250,000 new students a month and now plan to scale globally.", 
			  	cover: "https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21672/201709/desktop_opt2_7bd86d016bd6518bc5a039cde18f12b8.jpg",
			  	logo: "https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_inverted_blue_style_2_1d03900a484fd73084e20a49689308c6.jpg"

			  },
			  { 
			  	title: "Verv", 
			  	desc: "Backed by Centrica (British Gas) and mentored by Google, Verv has developed an intelligent energy assistant, smart home product, using high speed energy analytics and machine learning to bring existing appliances to life. With 6 patents filed, Verv has sold units to British Gas, EDF & Allianz.", 
			  	cover: "https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21629/201709/a861882e15b1f7704236e79efd4f1c13.jpg",
			  	logo: "https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/c04685f6fb1c3c8b3828ba7441a0d5e1.jpg"

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
			
			<div className="list-item-container" key={index}>
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
