import React, {Component} from 'react';
const url="http://localhost:3001/invoice";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getInvoice(url);
  }

  getInvoice(iurl){
  	fetch(iurl)
      .then(res => {
        return res.json(); 
        console.log(res)})
      .then((result) => {
        console.log(result)
          this.setState({ items: result.foundInvoice });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.getInvoice("http://localhost:3001/invoice/test")
    fetch("http://localhost:3001/invoice/test")
      .then(res => {
        return res.json();
        })
      .then((result) => {
        console.log(typeof result)
          this.setState({ value: result });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, items, value } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
      <div>
	       <form onSubmit={this.handleSubmit}>
	        <label>
	          Name:
	          <input type="text" name="invoiceId" value={this.state.value} onChange={this.handleChange} />
	        </label>
	        <input type="submit" value="Submit" />
	      </form>
        <p> {value} </p>
        <ul>
          {items.map(item => (
            <li key={item.invoiceId}>
              {item.sender.name}
            </li>
          ))}
        </ul>
        </div>
      );
    }
  }
}
export default MyComponent;

