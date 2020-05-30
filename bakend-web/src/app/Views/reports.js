import React, {Component,useState} from 'react'
import {render} from 'react-dom'
import Dashboard from './dashboard'
import LineChart from '../Components/lineChart'
import MapCases from '../Components/mapCases'
class Reports extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <LineChart/>
                <LineChart/>
                <MapCases/>
            </div>
        )  
    }
  }

export default Reports