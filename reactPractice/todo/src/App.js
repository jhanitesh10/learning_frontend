import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './component/search.js';
import Card from './component/card.js'

let todoArray = [
  {
    todoData: 'My first todo',
    todoPriority: 'Low',
    theme : 'info',
  },
  {
    todoData: 'My second todo',
    todoPriority: 'medium',
    theme : 'warning'
  },
  {
    todoData: 'My third todo',
    todoPriority: 'Hight',
    theme: 'danger'
  }
]

class App extends Component {
  
  
  constructor(props){
    super(props);

    this.state = {todoArray}
  }

  fetchTodo(data){

    this.setState({ todoArray: [...this.state.todoArray, data] }) //simple value


  }

  removeData(index){

    this.setState((state) => ({

      todoArray: state.todoArray.filter(function (e, i) {
        return i !== index;
      })

    }));


  }

  completeTask(index){


    this.setState((state) => ({

      todoArray: state.todoArray.filter(function (e, i) {
        if (i === index) {
          console.log(e, "***************");
          e.theme = 'success';
        }
        return e;
      })

    }));

  }

  render() {

    let size = {
      width: '100%',
      height: '100%',
      color: 'white',
      position: 'absolute',
      background: '#132A39'
    }

    return (
      <div style = {size} className="container-fluid bg-red" >
      <Search fetchTodo={this.fetchTodo.bind(this)}/>
      <Card data={this.state.todoArray} removeData = {this.removeData.bind(this)} completeTask = {this.completeTask.bind(this)}  />
      </div>
    );
  }
}

export default App;
