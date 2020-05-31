import React,{useState,useEffect} from 'react'
import {render} from 'react-dom'
import User from '../Components/user'
import Header from '../Components/header'
import {useParams} from 'react-router-dom'


const  Users =()=>{
    
    const [dates,setDates] = useState([])
    
    let {id} = useParams()
    useEffect(()=>{
        async function fetchCount(){
            const URI = 'http://181.54.182.7:5000/api/temporal/hospital'
            const OptionAPI ={ 
            method: 'POST',
            body: JSON.stringify({
              _id:id,
            }),
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json'
            }
          }
          await fetch(URI,OptionAPI).then(function (res){return res.json()})
                              .then((data)=>{
                                setDates(data)
                                console.log(data)
                              })
                              .catch(err=>console.log(err))
        }
       fetchCount();
    },[]);
    
    

      
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
                    <table>
                               <thead>
                                   <tr>
                                       <th>nombre usuario</th>
                                       <th>Enfermedad</th>
                                   </tr>
                               </thead>
                               <tbody>
                                  { 
                                      dates.map( dates => {
                                          
                                          return(
                                              <tr>
                                                  <td>{dates.name}</td>
                                                  <td>{dates.sick}</td>
                                              </tr>
                                          )
                                      })
                                  }  
                                </tbody>
                           </table>
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
export default Users