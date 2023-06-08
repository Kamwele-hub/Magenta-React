import { useState } from "react"
import axios from "axios"
//
function Register({changeForm}){
    const [newPetOwner,setnewPetOwner] = useState({
        "name" :"",
        "password" : ""
    })
    console.log(newPetOwner)
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("https://philoxenia.onrender.com/user",newPetOwner)
        changeForm()
    }
    return(
        
        <form onSubmit={handleSubmit} className="signup">
            <h2 className="sign">Sign Up</h2>
           
            <input type="text" placeholder="name"onChange={(e) => setnewPetOwner({...newPetOwner,name:e.target.value})} className="name"></input>
            
            
            <input type="password" placeholder=" password"  onChange={(e) => setnewPetOwner({...newPetOwner,password:e.target.value})} className="password"></input>
            

            <button className="register">Register</button>
        </form>
        
    )
    }

export default Register