import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {priority : "Low"}

    }

    handleSubmit(e){
        e.preventDefault();
        let task = ReactDOM.findDOMNode(this.refs.task).value;
        

        this.props.fetchTodo({
            id: 4,
            todoPriority: this.state.priority,
            todoData: task
        });
        
        this.setState({
            id: '', 
            todoData : '', 
            todoPriority : ''
        })

        
    }


    handleChange(priority, evt){
        evt.preventDefault();
        this.setState({ priority });
    }
    

    render(){

        return(

            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col col-12 col-sm-8 col-md-6 col-lg-4 offset-4">


                        <form onSubmit={this.handleSubmit.bind(this)}>                            
                            <div className="input-group">
                                <input type="text" ref="task" class="form-control" aria-label="Text input with dropdown button"/>
                                
                                <div className="input-group-append">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.priority}</button>
                                    
                                    <div ref="priority" className="dropdown-menu">
                                        <a onClick={e => this.handleChange("Low", e)} className="dropdown-item" href="#">Low</a>
                                        <a onClick={e => this.handleChange("Medium", e)} className="dropdown-item" href="#">Medium</a>
                                        <a onClick={e => this.handleChange("High", e)} className="dropdown-item" href="#">High</a>
                                    </div>
                                 
                                </div>


                                <div class="input-group-append">
                                
                                    <button class="btn btn-outline-secondary" type="submit">ADD</button>
                                </div>
                            </div> 
                        </form>


                     </div>
                </div>
            </div>
        );

    }
}

export default Search;