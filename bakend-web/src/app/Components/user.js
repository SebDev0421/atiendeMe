import React, {Component} from 'react'

export default function User(){
    return(
        <div className = "card z-depth-2">
            <div className="card-content">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input 
                                    id="nameUser" 
                                    disabled value="Nombre del paciente"
                                    type="text" 
                                    class="validate"/>
                                <label for="first_name">Nombre del paciente</label>
                            </div>
                            <div className="input-field col s6">
                                <input 
                                    id="adressUser" 
                                    disabled value="Dirección del paciente"
                                    type="text" 
                                    class="validate"/>
                                <label for="first_name">Dirección del paciente</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input 
                                    id="ageUser" 
                                    disabled value="Edad"
                                    type="text" 
                                    class="validate"/>
                                <label for="first_name">Edad</label>
                            </div>
                            <div className="input-field col s6">
                                <input 
                                    id="locatedUser" 
                                    disabled value="Localidad"
                                    type="text" 
                                    class="validate"/>
                                <label for="first_name">Localidad</label>
                            </div>
                        </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input 
                                        id="epsUser" 
                                        disabled value="EPS"
                                        type="text" 
                                        class="validate"/>
                                    <label for="first_name">EPS</label>
                                </div>
                                <div className="input-field col s6">
                                    <input 
                                        id="motivedUser" 
                                        disabled value="Motivo de la consulta"
                                        type="text" 
                                        class="validate"/>
                                    <label for="first_name">Motivo de la consulta</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}