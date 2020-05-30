import React, {Component} from 'react'
import { render } from 'react-dom'

class Header extends Component {
 render(){
     return(
        <nav className="light-blue darken-3">
            <div className="container">
                <a className="brand-logo" href="/">Hackaton Globant Newton Code</a>
            </div>
        </nav>
     )
 }
}

export default Header 
