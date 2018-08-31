import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
 
    constructor(props) {
    super(props);
 
  }




  render() {
      let data = this.props.singleUserObj; 
    console.log(data.email);
      return (
      <div>
        <h2>Hey</h2>
 
      </div>
    );
  }
}

export default Table;
