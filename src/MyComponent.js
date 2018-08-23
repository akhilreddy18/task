import React, {Component} from 'react';
const url="http://localhost:3001/invoice";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      value: '',
      test: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getInvoice(url);
  }

  getInvoice(iurl){
  	fetch(iurl)
      .then(res => res.json())
      .then((result) => {
          this.setState({ items: result.foundInvoice });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/invoice?invoiceId="+this.state.value)
      .then(res => res.json())
      .then((result) => {
          this.setState({test: result.foundInvoice.sender.name})
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, items, value, test } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
            <div>
      	       <form onSubmit={this.handleSubmit}>
      	          <input type="text" name="invoiceId" value={this.state.value} onChange={this.handleChange} />
                 <input type="submit" value="Submit"></input>
      	      </form>
              </div>
            <div>
            <p> {value} </p>
            <ul>
              {items.map(item => (
                <li key={item.invoiceId}>
                  {item.sender.name} - {item.invoiceId}
                </li>
              ))}
            </ul>
            <h1> {test} </h1>
            </div>
        </div>
      );
    }
  }
}
export default MyComponent;

