import React, {Component} from 'react'
import { render } from 'react-dom'
//import Style from '../styles/login.css'
class Login extends Component {

    render(){
        return(
            <div>
            <div style={{flex:1,borderWidth: 60, borderColor: "black", alignItems:"center", padding:"10%"}}>
                
                <div className="row">
                    <div className="col s6">
                      <h2 style={{ 
                        textAlign:"center", 
                        justifyContent:"center", 
                        paddingTop:"30%",
                        fontSize:"14"}}>
                          Hackaton Globant Newton Code</h2>
                    </div>
                    <div className="col s6">
                    <h1 style={style.h1 }>Login</h1>
                    <div className = "card z-depth-2">
                        <div className="card-content">
                          <div className="row">
                              <div className="input-field col s7">
                                <input name="user" type="text" placeholder="Usuario o email"/>
                                <input name="password" type="password" placeholder="Contraseña"/>
                              </div>
                              <div className="input-field col s5">
                                  <button
                                    style={style.button}
                                    className="btn blue"
                                  >Ingresar</button>
                                  <a href="/register">
                                  <button
                                    onClick={()=>{
                                        console.log('open second window')
                                    }}
                                    style={style.button}
                                    className="btn blue lighten-3"
                                    >Registrar
                                      </button>
                                      </a>
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

const style = {
    button:{
      marginTop:"10%",
      marginLeft:"30%"
    }
}


export default Login;