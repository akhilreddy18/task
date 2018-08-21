import React, {Component} from 'react';
// import * as apiCalls from './api';

class Invoice extends Component {

	constructor(props){
		super(props);

		this.state = { invoice: []};
	}

	componentDidMount() {
		fetch('http://localhost:3001/invoice')
			.then(response => {
				return response.json();
		}).then(data => {
			let invoices = data.response.map((inv) => {
				return {
					<div key={inv.results}>
						<h1> {inv.sender} </h1>
					</div>
				}
			})
			this.setState({invoice: invoices});
			console.log(this.state.invoice);
		})
	}


	// componentDidMount(){
	// 	this.loadInvoices();
	// }

	// async loadInvoices(){
	// 	let invoices = await apiCalls.getInvoice();
	// 	this.setState({invoices});
	// 	console.log(this.state.invoice);
	// }

	render(){
		return(
			<div className="container">

			{this.state.invoice}

			</div>

	);
	}
}
export default Invoice;