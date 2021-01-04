import React, {useState} from 'react';
import {
  Button,
} from "@material-ui/core";


export default function TestPage(){
const [reg,setReg] = useState();
  const [idINFO,setIdINFO] = useState('pff');

  function registr(event){
    event.preventDefault();
    const data = new FormData();
    data.append("userFullName","Sinan Isgenderli");
    data.append("userLocation","sinanLand");
    data.append("userEmail","testmest7@gmail.ru");
    data.append("userPassword","4");
    fetch("http://isgenderli.com/registrationForm",{
      method: 'POST',
      credentials:"same-origin",
      mode:"cros",
      body: data
    })
      .then(res=>res.text())
      .then(
        (res) =>console.log(res),
        (error) =>console.log(error)
      )
  }
  function login(event){
    event.preventDefault();
    const data = new FormData();
    data.append("userEmail","testmest7@gmail.ru");
    data.append("userPassword","4");

    fetch("http://isgenderli.com/loginForm",{
      method: 'POST',
      credentials:"same-origin",
      mode:"cors",
      body: data
    })
      .then(res=>res.text())
      .then(
        (res) => console.log(res),
        (error) =>console.log("00")
      )
  }
  return(

      <div style={{backgroundColor:"#d3d3d329"}}>
      <Button onClick={registr}
              variant="contained"
              color="primary"
      >Registration</Button>

            <Button onClick={login}
                                       variant="contained"
                                       color="primary"
          >Login</Button>
        <div>

        {idINFO}
        </div>
      </div>



  )
}
