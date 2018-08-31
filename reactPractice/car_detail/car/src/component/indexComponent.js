import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Index extends Component {
 
    constructor(props) {
    super(props);
    this.state = {userData : []}
  }

  componentDidMount(){

      axios.get('http://localhost:12345/show')
          .then((response) => {
              let userDetailArray = response.data;
              this.setState({ userData: userDetailArray});
          })
          .catch((e) => {
              console.log("error while sending data to node platform", e);
          });
  
  }

  singleValue(){
    this.state.userData.map( (value, index) => {
        console.log(value)
        return value;
    });
  }

  render() {
      let data = this.state.userData; 

      return (
        <div className="container">
        <h2>User detail</h2>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th colSpan={4}>Password</th>
                </tr>
            </thead>
                
              {
                  data.map((value, index) =>
                  
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{value.email}</td>
                                <td>{value.password}</td>
                                <td>
                                    <Link to={"/edit/"+value.id} className="btn btn-primary">Edit</Link>
                                </td>
                                <td>
                                    <Link to={"/update/" + value.id} className="btn btn-primary">Delete</Link>
                                </td>
                            </tr>
                    
                        </tbody>

                  )
              }

        </table>
        </div>
    );
  }
}

export default Index;
