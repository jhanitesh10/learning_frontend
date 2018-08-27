import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './component/search.js';
import Card from './component/card.js'

let todoArray = [
  {
    id: '',
    todoData: 'My first todo',
    todoPriority: 'Low'
  },
  {
    id: '',
    todoData: 'My second todo',
    todoPriority: 'Hight'
  }
]

class App extends Component {
  
  
  constructor(props){
    super(props);

    this.state = {todoArray}
  }

  fetchTodo(data){
    todoArray.push(data);
    this.setState({
      todoArray
    });
  }

  removeData(index){
    console.log("#####################");
    this.setState({
      todoArray: this.state.todoArray.filter(function (e, i) {
        return i !== index;
      })
    });
  }

  render() {
    return (
      <div className="App">
      <Search fetchTodo={this.fetchTodo.bind(this)}/>
      <Card data={this.state.todoArray} removeData = {this.removeData.bind(this) } />
      </div>
    );
  }
}

export default App;
