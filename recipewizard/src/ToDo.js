import React from 'react';
import List from './list.js';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }
    onChange = (event) => {
        this.setState({term: event.target.value});
      }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
      }
    
      onDelete = (key) => {
        let items=this.state.items;
        items = items.filter((item, index) => index !== key);
        this.setState({...this.state, items });
      }
  
    render() {
        const {items, term} = this.state;
      return (
        <div>
            <form className="App" onSubmit={this.onSubmit}>
                <input value={this.state.term} onChange={this.onChange} />
                <button type="submit">Add New</button>
            </form>
            {items.map ((item, index) => <List value={index} item={item} onClick={this.onDelete}/>)}
        </div>
      );
    }
  }