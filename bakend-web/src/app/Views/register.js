import React, {Component} from 'react'
import { render } from 'react-dom'
import Maptest from '../Components/mapHospital'

class Registry extends Component {

  render(){
    return(
      <div style={{paddingLeft:"20%"}}>
        <div className="row" >
            <h1 style={{fontFamily:"Roboto"}}>Registro atiendeMe Hospital</h1>
            <div className="col s8" style={{paddingLeft:"5%"}}>
            <div className = "card z-depth-2">
                <div className="card-content">
                  <div className="row">
                      <div className="input-field col s10" style={{paddingLeft:"20%"}}>
                        <input name="name" type="text" placeholder="Nombre hospital"/>
                        <input name="nit" type="text" placeholder="Nit"/>
                        <input name="address" type="text" placeholder="Direccion hospital"/>
                        <input name="email" type="text" placeholder="Email administrador"/>
                        <input name ="password" type="password" placeholder="Contaseña"/>
                        <input type="password" placeholder="Contraseña contaseña"/>
                        <span> Ubica tu hospital:</span>
                      </div>
                      <Maptest/>
                      <div style={{paddingTop: "3%"}}>
                        <button
                            className="btn blue lighten-3"
                              style={{
                                marginRight:"15%",
                                marginLeft:"25%"
                            }} 
                            
                          >Regresar</button>
                          <a href="/register">
                          <button
                              onClick={()=>{
                            }} 
                            className="btn blue"
                          >Completar</button></a>
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



export default Registry;