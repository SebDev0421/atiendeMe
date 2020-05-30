import React, {Component,useState} from 'react'
import {render} from 'react-dom'
import Dashboard from './dashboard'
import LineChart from '../Components/lineChart'
import MapCases from '../Components/mapCases'
import Header from '../Components/header'

class Reports extends Component {
    constructor(){
        super()
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
                        <div className="row">
                            <div className="col s5">
                                <div className = "card z-depth-2" >
                                    <div className="card-content">
                                        <MapCases/>         
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="row">
                                    <div className = "card z-depth-2">
                                        <div className="card-content">
                                            <LineChart/>          
                                        </div>
                                    </div>
                                    <div className = "card z-depth-2">
                                        <div className="card-content">
                                            <LineChart/>           
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )  
    }
}

export default Reports