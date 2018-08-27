import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckSquare, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
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

    handleDelete(e){
        e.preventDefault();
        console.log(e.key, "************");
    }
    render(){
        let data = this.props.data;

        return (
            <div className ="container">
                <div className="row">
                    <div className="col col-12 col-sm-8 col-md-6 col-lg-4 offset-4">
                         <h4>Todo Count: <span className="badge">{data.length}</span></h4>
                         <ul className="list-group">
                            {
                                data.map((value, index) => 

                                <li className="list-group-item"  key={index}>
                                        {value.todoData}   ({value.todoPriority})
                                    <span><a onClick={e => this.handleDelete(e)} href="#"><FontAwesomeIcon icon={faCheckSquare} /></a></span>
                                    <span><a onClick={e => this.handleOnClick(e, index)} href="#"><FontAwesomeIcon icon={faTimesCircle} /></a></span>
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