import React from "react";
import ReactDOM from "react-dom";


class SearchBox extends React.Component {
    handleClick(e){
        e.preventDefault();
        let userName = ReactDOM.findDOMNode(this.refs.userName).value;
        this.props.fetchUser(userName);
        // alert(userName);
    }
    
    render(){

        return (
            <div className="container-flued">
            <div className="row">
              <div class="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
                <form onSubmit={this.handleClick.bind(this)}>
                  <div class="form-group">
                    <input ref="userName" type="text" class="form-control" id="user"  />
                  </div>

                  <button class="btn btn-danger btn-block">
                    Search Git user
                  </button>

                </form>
              </div>
            </div>
          </div>
        );

    }

}

export default SearchBox;