import React, {useState} from 'react'


const Login=() =>{
  
  var email,password
  
  

        const getLogin=()=>{
          const URI = 'http://181.54.182.7:5000/api/hospitals'
          const OptionAPI ={ 
          method: 'PUT',
          body: JSON.stringify({
            email:email,
            password:password
          }),
          headers: {
              Accept : 'application/json',
              'Content-Type' : 'application/json'
          }
        }
        fetch(URI,OptionAPI).then(function (res){return res.json()})
                            .then((data)=>{
                              if(data.status === "user dont exits"){
                                alert("el email no esta asociado a ningun hospital")
                              }else if(data.status === "password incorrect"){
                                alert("la contraseña es incorrecta")
                              }else{
                                window.open(`http://181.54.182.7:3000/home/${data._id}`,'_blank')
                                console.log('ok')
                              }
                            })
                            .catch(err=>console.log(err))
        }

  
  var [view,setView] = useState(<div style={{flex:1,borderWidth: 60, borderColor: "black", alignItems:"center", padding:"10%"}}>
                
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
                  <input
                  onChange={(value)=>{email = value.target.value}}
                  name="email" type="text" placeholder="Usuario o email"/>
                  <input 
                  onChange={(value)=>{password = value.target.value}}
                  name="password" type="password" placeholder="Contraseña"/>
                </div>
                <div className="input-field col s5">
                    <button
                      style={style.button}
                      className="btn blue"
                      onClick={getLogin}
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
)
  


   
      return(
            <div>
             {view}
            </div>
        )
    

}

const style = {
    button:{
      marginTop:"10%",
      marginLeft:"30%"
    }
}


export default Login;



