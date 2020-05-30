import React,{Component} from 'react'
import {render} from 'react-dom'
import Dashboard from './dashboard'
import ImgHos from '../assets/hospital.png'
export default class InfoHospital extends Component{
    render(){
        return(
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
                                                id="nameHos" 
                                                disabled value="nombre del hospital"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Nombre del hospital</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input 
                                                id="telHos" 
                                                disabled value="Numero de telefono"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Numero de telefono</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input 
                                                id="adressHos" 
                                                disabled value="Dirrecion"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Dirrecion</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input 
                                                id="mailHos" 
                                                disabled value="Email"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Email</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input 
                                                id="nitHos" 
                                                disabled value="NIT"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">NIT</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}