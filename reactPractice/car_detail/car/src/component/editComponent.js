import React, { Component } from "react";
import axios from 'axios';

class Create extends Component {
    
    constructor(props){
        super(props);
        this.state = ({
            email : '',
            password: ''
        });
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        let userObj = {
            email : this.state.email,
            password : this.state.password
        }
        axios.post('http://localhost:12345/edit', userObj)
        .then((response) => {
            console.log(response);
        })
        .catch( (e) => {
            console.log("error while sending data to node platform", e);
        });
        this.setState({
            email: '',
            password: ''
        });
    }

    handleName(e){
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            email : e.target.value
        });
    }

    handlePassword(e){
        e.preventDefault();
        this.setState({
            password: e.target.value
        });
    }


  render() {

    return (
      <div style={{marginTop:50}}>
            <div className="row">
                <div className="col-4 offset-4">
                    <h4>Add User</h4>
                    <hr />
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className= "form-group">
                            <lable htmlfor="email">Email</lable>
                            <input type="text" value={this.state.email} className="form-control" onChange={this.handleName.bind(this)} />
                        </div>

                        <div className="form-group">
                            <lable htmlfor="password" conChange={this.handlePassword.bind(this)}>Password</lable>
                            <input type="password" value={this.state.password} className="form-control" onChange={this.handlePassword.bind(this)} />
                        </div>
                        <button className="btn btn-md btn-info">Add</button>
                    </form>
                </div>
            </div>
      </div>
    );
  }
}

export default Create;
