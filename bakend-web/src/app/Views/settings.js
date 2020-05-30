import React, {Component} from 'react'
import {render} from 'react-dom'
import Dashboard from './dashboard'
import Header from '../Components/header'
class Settings extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="row">
                    <div className="col s3">
                        <Dashboard/>
                    </div>
                    <div className="col s9">
                        <div className = "card z-depth-2">
                            <div className="card-content">
                            <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input 
                                            id="first_name" 
                                            type="text" 
                                            class="validate"/>
                                        <label 
                                            for="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input 
                                            id="last_name" 
                                            type="text" 
                                            class="validate"/>
                                        <label for="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input  
                                            id="disabled" 
                                            type="text" 
                                            class="validate"/>
                                        <label for="disabled">Disabled</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input 
                                            id="password" 
                                            type="password" 
                                            class="validate"/>
                                        <label for="password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input 
                                            id="email" 
                                            type="email" 
                                            class="validate"/>
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <div className="input-field col s12">
                                            <input 
                                                id="email_inline" 
                                                type="email" 
                                                class="validate"/>
                                            <label for="email_inline">Email</label>
                                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>   
        )
    }
}
export default Settings