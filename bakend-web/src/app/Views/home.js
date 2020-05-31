import React, {Component} from 'react'
import Dashboard from './dashboard'
import Header from '../Components/header'

class Home extends Component{
    
    componentDidMount(){
        console.log('get id')
    }
    
    render(){
        return(
            <div>
                <Header/>
                <div className="row">
                    <div className="col s3">
                        <Dashboard/>
                    </div>
                    <div className="col s9">
                       
                    {/* -------------------------------------- */}
                        <div className = "card z-depth-2">
                            <div className="card-content">
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                                <label for="first_name">Pacientes activos: </label>
                                                <label>0</label>
                                                <label for="first_name">Pacientes pendientes: </label>
                                                 <label>0</label>
                                            
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

export default Home