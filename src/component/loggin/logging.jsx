import React from 'react';
import './logging.css';
export default function Loggin () {
    let [userInfo,setUserInfo] = React.useState({})
    let [loginValue,setLoginValue] = React.useState(
        {
            name:'',
            pass:''
        }
    )
        console.log(userInfo)
    function logBtn () {
        fetch('http://localhost:3001/login',
            {
                method:'POST',
               
                body:JSON.stringify(
                    {
                        name_user:loginValue.name,
                        pass_user:loginValue.pass
                    }
                )
            }
        )
          .then(response => response.json())
          .then(data => {
              setUserInfo(data)
          })
          .catch(error => {
            console.log('fetchError a hassan')
          });
          console.log(userInfo)

    }

    function inputCollecter (event) {
        setLoginValue (prev => {
            return(
                {
                    ...prev,[event.target.name]:event.target.value
                }
            )
        })
    }
    return (
        <div className="logging">
            <img src="./img/tme.png" alt="tmeLogo" />
            <label htmlFor="user">User:</label>
            <input
             type="text" 
             name="name" 
             id="name"
             value={loginValue.name}
             onChange={inputCollecter}
             />
            <label htmlFor="user_pass">Password:</label>
            <input 
            type="password" 
            name="pass" 
            id="pass"
            value={loginValue.pass}
            onChange={inputCollecter} 
            />
            <button onClick={logBtn}>log in</button>
        </div>
    )
}