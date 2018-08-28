import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckSquare, faTimesCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReactDOM from "react-dom";

class Card extends React.Component{
    constructor(props){
        super(props);
    }

    handleOnClick(e, index){
        e.preventDefault();
        this.props.removeData(index);
    }

    handleDelete(e, index){
        e.preventDefault();
        this.props.completeTask(index);
    }

    render(){
    
        let data = this.props.data;

        return (
            <div className ="container">
                <div className="row">
                    <div className="col  col-lg-8 offset-2">
                         <h6 className="text-center">Todo count : {data.length}</h6>
                         <ul className="list-group list-group-flush">
                            {
                                data.map((value, index) => 
                                    
                                    <li className={`border list-group-item bg-${value.theme}`}  key={index}>
                                        <strong>{value.todoData}</strong>  <span className="text-dark">[{value.todoPriority}]</span> 
                                    <div class="btn-group float-right mt-2" role="group">

                                        <span className="badge">
                                            <button className = "btn btn-default btn-xs" onClick={e => this.handleDelete(e, index)}> <FontAwesomeIcon icon={faCheckSquare} /> </button>
                                        </span>

                                        <span className="badge">
                                            <button className = "btn btn-default btn-xs" onClick={e => this.handleOnClick(e, index)}> <FontAwesomeIcon icon={faTrashAlt} /> </button>
                                        </span>
                                        
                                    </div>
                                </li>

                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}

export default Card;