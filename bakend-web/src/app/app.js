import React, {Component} from 'react'
import { render } from 'react-dom'
import { Switch, Route} from 'react-router-dom'
import Login from './Views/login'
import Header from './Components/header'
import Registry from './Views/register'
import MapHospitals from './Components/mapHospital'
import Dashboard from './Views/dashboard'
import Settings from './Views/settings'
import Users from './Views/users'
import Reports from './Views/reports'
import Home from './Views/home'
import InfoHospital from './Views/infoHospital'
class App extends Component{
    constructor() {
        super()
        this.state = {
            title : '',
            description: '',
            task: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    addTask(e){
        console.log(this.state)
        fetch('/api/hospitals/',
        {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then((res)=>{res.json()})
          .then((data)=>{
              console.log(data)
              M.toast({html: 'task saved'})
              this.setState({title:'',description:''})
            })
          .catch((err)=>{console.log(err)})
        e.preventDefault()
    }

    componentDidMount(){
        this.fetchTask()
    }

    fetchTask(){
        fetch('/api/hospitals')
                          .then(res => res.json())
                          .then(data =>{
                              this.setState({task:data})
                              console.log(this.state.task)
                          })
                          .catch(err => console.log(err))
    }

    handleChange(e){
        const {name, value} = e.target
        
        this.setState({
            [name]:value
        })
        
    }
    render(){
        
        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Registry}/>
                    <Route path="/mapTest" component={MapHospitals}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/reports" component={Reports}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/infohospital" component={InfoHospital}/>
                </Switch>
            </div>
        )
    }
}

export default App