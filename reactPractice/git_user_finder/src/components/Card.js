import React from "react";
import ReactDOM from "react-dom";


class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let imageStyle = {
            width: '60px',
            height : '60px'
        }
        let data = this.props.data;

        if((data.notFound === 'Not Found')){
            return (
                <div>
                    <div className="container-fluid py-3">
                        <div className="row">
                            <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
                                <div className="card bg-white text-dark">

                                    <div className="card-body">

                                        <div className="card-title">
                                        <h6>User not found</h6>
                                        </div>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            
        }else{

            return (
                    <div>
                        <div className="container-fluid py-3">
                            <div className="row">
                                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
                                    <div className="card bg-white text-dark">
    
                                        <div className="card-body">
                                        
                                            <div className="card-title">
                                            <a href={data.url} alt="userImage" target="_blank">
                                                <img style = {imageStyle} className="mx-auto d-block" id="avatar"  src={data.avatar} alt="userimage" /> 
                                            </a>
                                            </div>
                                            <hr className="bg-danger"/>
                                            <h4 className="text-danger text-center">{data.userName}</h4>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><strong>Name:</strong>  {data.realName}</li>
                                                <li class="list-group-item"><strong>Bio:</strong>  {(data.bio)?data.bio:'Unavailable'}</li>
                                                <li class="list-group-item"><strong>Email:</strong>  {(data.email)?data.email:'Unavailable'}</li>
                                                <li class="list-group-item"><strong>Crated-on:</strong> {(data.createdAt)? data.createdAt : 'unavailable'}</li>
                                                <li class="list-group-item"><strong>Location:</strong> {(data.location)?data.location:'Unavailable'}</li>
                                                <li class="list-group-item"><strong>Followers:</strong> {data.followers}</li>
                                                <li class="list-group-item"><strong>Following:</strong> {data.following}</li>
                                            </ul>
                                            
                                        </div>
                                        <a className="mb-4 mx-4 btn btn-danger" href={data.url} target="_blank">Visit user</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            );

        }
    }
}

export default Card;