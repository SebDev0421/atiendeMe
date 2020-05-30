import React, {Component,useState} from 'react'
import { Line } from 'react-chartjs-2'


class LineCharts extends Component {
    constructor(){
        super()
        this.state = {
            data:{
                labels:["1","2","3","4","5","6"],
                datasets: [
                    {
                        label: "Ingesados",
                        backgroundColor: "rgba(255,0,255,0.75)",
                        data: [4, 5, 1, 10, 32, 2, 12]
                    }
                ]
            }
        }
    }

    
    render(){
        return(
            <div style={{ position:"relative",width:600, height: 550}}>
                <h3>Ingresados</h3>
                <Line
                  options={{
                      responsive:true
                  }}
                  data={this.state.data}
                />
            </div>
        )  
    }
  }

export default LineCharts