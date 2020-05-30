import React, {Component} from 'react'
import {render} from 'react-dom'
import Dashboard from './dashboard'

export default class Home extends Component{
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
                                                id="nameDoc" 
                                                disabled value="nombre del doctor"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Nombre del doctor</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input 
                                                id="lastnameDoc" 
                                                disabled value="apellido del doctor"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Apellido del doctor</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input 
                                                id="tel" 
                                                disabled value="Numero de telefono"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Numero de telefono</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input 
                                                id="adress" 
                                                disabled value="Dirrecion"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Dirrecion</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input 
                                                id="mail" 
                                                disabled value="Email"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Email</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input 
                                                id="nit" 
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
                {/* -------------------------------------- */}
                    <div className = "card z-depth-2">
                        <div className="card-content">
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input 
                                                id="activeUser" 
                                                disabled value="Pacientes activos"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Pacientes activos</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input 
                                                id="pendingUser" 
                                                disabled value="Pacientes pendientes"
                                                type="text" 
                                                class="validate"/>
                                            <label for="first_name">Pacientes pendientes</label>
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