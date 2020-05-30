import React, {Component} from 'react'
import {render} from 'react-dom'

class Dashboard extends Component{
    render(){
        return(
            <div class="collection">
                <ul className="collection with-header">
                    <li className="collection-item">
                        <div>Inicio
                            <a href="/home" className="secondary-content">
                                <i className="material-icons">send</i>
                            </a>
                        </div>
                    </li>
                    <li className="collection-item">
                        <div>Usuarios
                            <a href="/users" className="secondary-content">
                                <i className="material-icons">navigate_next</i>
                            </a>
                        </div>
                    </li>
                    <li className="collection-item">
                        <div>Reportes
                            <a href="/reports" className="secondary-content">
                                <i className="material-icons">send</i>
                            </a>
                        </div>
                    </li>
                    <li className="collection-item">
                        <div>Información del hospital
                            <a href="/infoHospital" className="secondary-content">
                                <i className="material-icons">send</i>
                            </a>
                        </div>
                    </li>
                    <li className="collection-item">
                        <div>Ajustes
                            <a href="/settings" className="secondary-content">
                                <i className="material-icons">send</i>
                            </a>
                        </div>
                    </li>
                </ul>                        
                <ul className="collection with-header">
                    <li className="collection-header">
                        <h6>Inventario</h6>
                    </li>
                    <li className="collection-item">
                        <div>Habitaciones
                            <a href="#!" className="secondary-content">
                                <i className="material-icons">send</i>
                            </a>
                        </div>
                    </li>
                    <li className="collection-item">
                        <div>Camas disponibles
                            <a href="#!" className="secondary-content">
                                <i className="material-icons">navigate_next</i>
                            </a>
                        </div>
                    </li>
                    <li className="collection-item">
                        <div>Camas cuidados intensivos
                            <a href="#!" className="secondary-content">
                                <i className="material-icons">send</i>
                            </a>
                        </div>
                    </li>
                </ul>
                        
                    </div>
        )
    }
}
export default Dashboard