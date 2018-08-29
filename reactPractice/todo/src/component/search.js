import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {priority : "Low", theme : "info"}

    }

    handleSubmit(e){
        e.preventDefault();
        let task = ReactDOM.findDOMNode(this.refs.task).value;
        console.log(task.length, "*************");

        if(!task.length){
            return;
        }

        this.props.fetchTodo({
            todoPriority: this.state.priority,
            todoData: task,
            theme : this.state.theme
        });
        
        ReactDOM.findDOMNode(this.refs.task).value = "";
        
    }


    handleChange(priority, theme, evt){

        evt.preventDefault();
        this.setState((prevstate, props) => ({
            priority: priority, 
            theme: theme
        }));

    }
    

    render(){
        let space = {
            margin: '60px',
            padding: '20px'
        }
        let { priority, theme } = this.state;
        let themeStatus = theme.toLowerCase();

        
        return(

            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col col-12 col-sm-8 col-md-6 col-lg-4 offset-4">

                        <h4 style={space} className="text-center">To do list maker.</h4>
                        <form onSubmit={this.handleSubmit.bind(this)}>                            
                            <div className="input-group">
                                <input type="text" ref="task" class="form-control" aria-label="Text input with dropdown button"/>
                                
                                <div className="input-group-append">
                                    <button className={`btn btn-outline-secondary bg-${themeStatus} dropdown-toggle`} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.priority}</button>
                                    
                                    <div ref="priority" className="dropdown-menu">
                                        <a onClick={e => this.handleChange("Low","info", e)} className="dropdown-item" href="#">Low</a>
                                        <a onClick={e => this.handleChange("Medium", "warning", e)} className="dropdown-item" href="#">Medium</a>
                                        <a onClick={e => this.handleChange("High","danger", e)} className="dropdown-item" href="#">High</a>
                                    </div>
                                 
                                </div>


                                <div className="input-group-append">
                                
                                    <button className="btn btn-outline-secondary" type="submit">ADD</button>
                                </div>
                            </div> 
                        </form>
                        <hr className="bg-white" />


                     </div>
                </div>
            </div>
        );

    }
}

export default Search;