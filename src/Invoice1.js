import React, {Component} from 'react';

class Invoice1 extends Component {

	constructor(props){
		super(props);
		this.state = { todos: [] }
		// this.getData()
		}

	// getData()
	// {
	// 	fetch('http://localhost:3001/invoice')
	// 	.then((resp)=>{
	// 		resp.json().then((res)=>{
	// 			this.setState({todos:res.foundInvoice})
	// 			console.log(this.state.todos)
	// 		})
	// 	})
	// }

		// return (
 //  			<div>
 //  			{this.state.todos ?
 //  				this.state.todos.map(item)=>
 //  				<h1>{item.sender.name}</h1>
 //  			}
 //  			:
 //  			<h1>wait</h1>
 //  			</div>
  				
	// )}
	componentDidMount() {
		const url = "http://localhost:3001/invoice";

		fetch(url)
		.then(result => result.json)
		.then(result => {
			this.setState({todos: result.foundInvoice})
		})
	}

	render(){
		return(
			<div>
			{
				this.state.data.map((data, key) =>
					<div>
					{data.invoiceId}
					</div>
					)
			}
			</div>
			)	 
}
export default Invoice1;