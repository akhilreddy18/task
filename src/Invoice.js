import React, {Component} from 'react';

class Invoice extends Component {

	constructor(props){
		super(props);
		this.state = { invoice: [] };
	}

	componentDidMount() {
		fetch('http://localhost:3001/invoice')

			.then(response => {
				let result = response.json();
				return result;
			})

			.then(data => {
			let invoices = data.allInvoices.map((inv) => {
				return 	<div key={inv.invoiceId}>
						<h1> {inv.invoiceId} </h1>
					</div>				
			})
			this.setState({invoice: invoices});
		})
	}

	render(){
		return(
			<div className="container">
			{this.state.invoice}
			</div>
	)}
}

export default Invoice;