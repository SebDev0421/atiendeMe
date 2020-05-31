import React, {Component} from 'react'
import { BrowserRouter,Route} from 'react-router-dom'
import Login from './Views/login'
import Registry from './Views/register'
import Settings from './Views/settings'
import Users from './Views/users'
import Reports from './Views/reports'
import Home from './Views/home'

class App extends Component{
    constructor() {
        super()
       this.state={
       }
        
    }


    render(){
        
        return(
            <div>
                <BrowserRouter>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Registry}/>
                    <Route path="/home/:id" children={<Home/>}/>
                    <Route path="/users/:id" children={<Users/>}/>
                    <Route path="/reports/:id" children={<Reports/>}/>
                    <Route path="/setting/:id" children={<Settings/>}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App