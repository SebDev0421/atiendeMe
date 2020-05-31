import React, {Component} from 'react'
import {render} from 'react-dom'
import Header from '../Components/header'
import {useParams} from 'react-router-dom'

const Settings = ()=>{

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
                                            className="btn blue"
                                            >
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
                        <div className = "card z-depth-2">
                            <div className="card-content">
                            <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input 
                                            id="first_name" 
                                            type="text" 
                                            class="validate"/>
                                        <label 
                                            for="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input 
                                            id="last_name" 
                                            type="text" 
                                            class="validate"/>
                                        <label for="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input  
                                            id="disabled" 
                                            type="text" 
                                            class="validate"/>
                                        <label for="disabled">Disabled</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input 
                                            id="password" 
                                            type="password" 
                                            class="validate"/>
                                        <label for="password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input 
                                            id="email" 
                                            type="email" 
                                            class="validate"/>
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <div className="input-field col s12">
                                            <input 
                                                id="email_inline" 
                                                type="email" 
                                                class="validate"/>
                                            <label for="email_inline">Email</label>
                                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
        borderRadius: 8,
    }
}
export default Settings