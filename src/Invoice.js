import React, {Component} from 'react';
import * as apiCalls from './api';

class Invoice extends Component {

	constructor(props){
		super(props);
		this.state = { invoice: [] };
		// this.handleInvoice = this.handleInvoice.bind(this);
	}

	// function requestInvoice() {
	// 	return fetch(URL, {
	// 		mode: "no-cors"
	// 	}).then(response => {
	// 			let result = response.json();
	// 			console.log(result)
	// 			return result;
	// 		})

	// 		.then(data => {
	// 		let invoices = data.allInvoices.map((inv) => {
	// 			return 	<div key={inv.invoiceId}>
	// 					<h1> {inv.sender.name} </h1>
	// 						</div>	
	// 		})
	// 		this.setState({ invoice: invoices });
	// 	})
	// }

	// componentDidMount() {

	// 	requestInvoice()
	// }

	// handleInvoice() {
	// 	fetch('http://localhost:3001/invoice')
	// 	.then(response => {
	// 			let result = response.json();
	// 			console.log(result)
	// 			return result;
	// 		})

	// 		.then(data => {
	// 		let invoices = data.allInvoices.map((inv) => {
	// 			return 	<div key={inv.invoiceId}>
	// 					<h1> {inv.sender.name} </h1>
	// 						</div>	
	// 		})
	// 		this.setState({ invoice: invoices });
	// 	})
	// }
	// <form onSubmit={this.handleInvoice} method="get" action="http://localhost:3001/invoice">
	// 		<input type="text" name="invoiceId"/>
	// 		</form>



	componentDidMount(){
		this.loadInvoice();
	}

	async loadInvoice(){
		let invoices = await apiCalls.getInvoice();
		this.setState({invoice: invoices});
	}
	
	render() {
		return(
			<div className="container">
			{this.state.invoice}
			</div>
	)}
}

export default Invoice;