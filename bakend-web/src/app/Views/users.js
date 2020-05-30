import React,{Component} from 'react'
import {render} from 'react-dom'
import Dashboard from './dashboard'
import User from '../Components/user'
class Users extends Component{
    render(){
        return(
            <div className="row">
                <div className="col s3">
                    <Dashboard/>
                </div>
                <div className="col s9">
                    <User/>
                </div>
            </div>
        )
    }
}
export default Users