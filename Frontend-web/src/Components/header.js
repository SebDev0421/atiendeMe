import React, {Component} from 'react'
import { render } from 'react-dom'

class Header extends Component {
    render(){
        return(
            <nav className="light-blue darken-3">
                <div className="row">
                    <div className="col s3">
                    <a href="/home" style={{}}>Hackaton Globant Newton Code</a>
                    </div>
                    <div className="col s6">                    
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" required/>
                                <label className="label-icon" for="search"><i class="material-icons">
                                    search</i>
                                </label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                    <div className="col s1" >
                        <a className="rigth-align" href="/login">Logout</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header 
