import React, { Component } from 'react';

class Themechanger extends Component{
   
    constructor(props){
        super(props);
        this.state = {theme : null}
    }
    
 
    resetTheme(evt)  {
        evt.preventDefault();
        this.setState({ theme: null });
    }
    

    changeTheme (theme, evt){
        evt.preventDefault();
        this.setState({ theme });
    }


    render(){
    
        let size = {
            width : '100%',
            height: '100%',
            color: 'white',
            position: 'absolute'
        }

        let buttonPlace = {
            margin : '50px'
        }
        
        let {theme} = this.state;
        let  themeStatus = theme ? theme.toLowerCase() : 'info';

        return (
            <div style={size} className={`container-fluid  bg-${themeStatus}`}>
            <h2 className="text-center"> Welcome to color changer! </h2>

            <div style={buttonPlace} className="row">
              <div className="col offset-md-5">
                <div className="btn-group">
                   
                    <button type="button" className={`btn btn-white btn-lg`}>
                        Choose Theme
                    </button>

                    <button type="button" className={`btn btn-white btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">
                             Toggle Theme Dropdown
                        </span>
                    </button>
                
                       
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#" onClick={e => this.changeTheme("Primary", e)}>
                            Primary Theme
                        </a>
                        
                        <a className="dropdown-item" href="#" onClick={e => this.changeTheme("Danger", e)}>
                            Danger Theme
                        </a>
                        
                        <a className="dropdown-item" href="#" onClick={e => this.changeTheme("Success", e)}>
                            Success Theme
                        </a>

                        <a className="dropdown-item" href="#" onClick={e => this.changeTheme("dark", e)}>
                            Dark Theme
                        </a>

                        <div className="dropdown-divider" />

                            <a className="dropdown-item" href="#" onClick={e => this.resetTheme(e)}>
                                Default Theme
                            </a>

                        </div>

                    </div>
              </div>
            </div>

            <div className="row">
                    <div className="col offset-5">
                    <h4>Iam the <strong>{themeStatus}</strong> Bootstrap class.</h4>
                    </div>
            </div>
            
        </div>
        );

    }
}


export default Themechanger;