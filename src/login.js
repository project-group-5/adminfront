import Paper from '@mui/material/Paper'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Login() {

    const [Email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [status,setStatus]=useState('')
    const navigate=useNavigate()
    return (
        <div style={{postion:"absolute"}}>
        <>

    <h1> Login Page </h1>

    
  <div style={{backgroundColor:"beige"}}>
  <label >Enter emailid</label><br/>
     <input type='text' onChange={(e)=>{
         setEmail(e.target.value)
     }} /><br/>
     <label>Enter Password</label><br/>
     <input type='password' onChange={(e)=>{setPassword(e.target.value)}}/><br/>
     <input type='button' value='Login' onClick={()=>{

       axios.get(`http://localhost:9091/findcredentials/${Email}`)
            .then((res)=>{
                var data=res.data
                if(data.role==="admin")
                {
                        if(data.adminEmail===Email && data.password===password )
                        {
                            sessionStorage.getItem("Email",data.adminEmail)  
                    navigate("/home")        
                        }
                        else
                        {
                            setStatus("invalid details")
                        }
                }
                
                
                /*else if(data.role==="user")
                {

                    if(data.userEmail===Email && data.password===password )
                    {
                        sessionStorage.setItem("username",data.adminEmail)
                navigate("/user")        
                    }
                    else
                    {
                        setStatus("invalid details")
                    }

            
                }*/
            })



     }} /><br/>
     {status}
  </div>
 
  
    
    </>
    </div>
    )
}

export default Login