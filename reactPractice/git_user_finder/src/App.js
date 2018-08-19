import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox.js';
import Card from './components/Card.js';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userName : 'jhanitesh10',
      realName : '',
      bio : '',
      email: '',
      createdAt : '',
      avatar : '',
      location : '',
      repos : '',
      followers : '',
      following : '',
      url : '',
      notFound : ''
    }

  }

  fetchApi(url){
    
    fetch(url).then( (res) => {
      return res.json();
    }).then( (data) => {
      console.log(data);

      this.setState({
        userName : data.login,
        realName : data.name,
        bio : data.bio,
        email : data.email,
        createdAt : data.created_at,
        avatar : data.avatar_url,
        location : data.location,
        repos : data.public_repos,
        followers : data.followers,
        following : data.following,
        url : data.html_url,
        notFound : data.message
      });

      }).catch((error) => {
      console.log("Error, while making api request", error);
    });

  }

  componentDidMount (){
    let url = `https://api.github.com/users/${this.state.userName}`;
    this.fetchApi(url);
  }

  fetchUser(userName){
    let url = `https://api.github.com/users/${userName}`;
    this.fetchApi(url);
  }

  render() {

    let bodyStyle = {
      width: '100%',
      height: 'auto',
      color: 'white',
      position: 'absolute'
    }

    return (

      <div style={bodyStyle} className="container-flued bg-info">
      <h2 className="text-center">Github user finder</h2>

        <SearchBox fetchUser={this.fetchUser.bind(this)} />
        <Card data={this.state}/>

      </div>
    );
  }

}

export default App;
