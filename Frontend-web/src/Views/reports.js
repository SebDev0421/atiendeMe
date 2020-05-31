import React, {Component,useState} from 'react'
import {render} from 'react-dom'
import LineChart from '../Components/lineChart'
import MapCases from '../Components/mapCases'
import Header from '../Components/header'
import {useParams} from 'react-router-dom'

const Reports = () => {
    let {id} = useParams()
        return(
            <div>
                <Header/>
                <div className="row">
                    <div className="col s3">
                    <div class="collection">
                        <ul className="collection with-header">           
                            <li className="collection-item">
                                <div className="row">
                                    <div className="col s3">
                                        <div>Inicio
                                        </div>
                                    </div>
                                    <div className="col s9"> 
                                        <button onClick={()=>{
                                            window.open(`http://181.54.182.7:3000/home/${id}`,'_blank')
                                            }}  style={style.button}
                                            className="btn blue">  
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="collection-item">
                                <div className="row">
                                    <div className="col s3">
                                        <div>Usuarios
                                        </div>
                                    </div>
                                    <div className="col s9"> 
                                        <button
                                            onClick={()=>{
                                            window.open(`http://181.54.182.7:3000/users/${id}`,'_blank')
                                            }}
                                            style={style.button}
                                            className="btn blue"> 
                                        </button> 
                                    </div>
                                </div>
                            </li>
                            <li className="collection-item">
                                <div className="row">
                                    <div className="col s3">
                                        <div>Reportes
                                        </div>
                                    </div>
                                    <div className="col s9">
                                        <button
                                            onClick={()=>{
                                            window.open(`http://181.54.182.7:3000/reports/${id}`,'_blank')
                                            }}
                                            style={style.button}
                                            className="btn blue">
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="collection-item">
                                <div className="row">
                                    <div className="col s3">
                                        <div>Ajustes
                                        </div>
                                    </div>
                                    <div className="col s9">
                                        <button
                                            onClick={()=>{
                                            window.open(`http://181.54.182.7:3000/setting/${id}`,'_blank')
                                            }}
                                            style={style.button}
                                            className="btn blue">   
                                        </button> 
                                    </div>
                                </div>
                                
                            </li>   
                        </ul> 
                    </div>
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
                        <div className="row">
                            <div className="col s5">
                                <div className = "card z-depth-2" >
                                    <div className="card-content">
                                        <h3> Pacientes ingresado: 4</h3>       
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className = "card z-depth-2">
                                    <div className="card-content">
                                        <h3> Pacientes con covid: 6</h3>        
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
const style = {
    button:{
        marginLeft:"80%",
        borderRadius: 8 
    }
}

export default Reports