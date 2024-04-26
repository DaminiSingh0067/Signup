import React from "react";
import { useState } from "react";
import axios from "axios";
import BI from "../background.jpg";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Signup = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [nameerr,setNameerr]= useState(false)
const [emailerr,setEmailerr]= useState(false)
const [passworderr,setPassworderr]= useState(false)

const handleSubmit = (e) => {
  e.preventDefault();
 
 
  if (name==""){
     setNameerr("name is required")
  }
  if (email==""){
    setEmailerr("email is required")

 }if (password==""){
  setPassworderr("password is required")
}
else{
  const data= {name,email,password}
   
  axios.post(
    "https://66274156b625bf088c07c7c9.mockapi.io/Mockapi",
   data,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  localStorage.setItem('user',JSON.stringify(data))
 alert("data has been sent")
  console.log(data)
}

}





  return (
    <>
      <div className="container
      
      "   style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${BI})`,
        backgroundSize: "cover",
      }}>
        <div className="row">
          <div
            className="col-12"
          
          >
            <form action="">
              <h5>Create your account</h5>
              <p>Its totally free and super easy </p>
              <div className="div">
                <button className="txt ">
                  <span className="me-2">
                    <FcGoogle />
                  </span>
                  Sign in with Google
                </button>
                <button className="txt ">
                  <span className="me-2">
                    <BsGithub />
                  </span>
                  Sign in with Github
                </button>
              </div>

              <p className="mt-3"> Or, register with your email </p>

              <div className="div">
                <label for="username">Full Name</label>{nameerr? <p style={{color:"red"}}>{nameerr}</p>:null}
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="txt" onChange={(e)=>setName(e.target.value)} 
                
                />
              
                <label for="username">Work Email</label>{emailerr? <p style={{color:"red"}}>{emailerr}</p>:null}
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="txt" onChange={(e)=>setEmail(e.target.value)}
                /> 

                <label for="username">Your password</label> {passworderr? <p style={{color:"red"}}>{passworderr}</p>:null}
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="txt" onChange={(e)=>setPassword(e.target.value)}
                />
                

                <div className="check">
                  <input type="checkbox" className="me-2" />
                  <lable>
                    By creating account means you agree to the
                    <span className="spn"> Terms and Conditions </span> , and
                    our
                    <span className="spn"> Privacy Policy</span>
                  </lable>
                </div>

                <button type="button" onClick={handleSubmit } className="bttn" >Sign up</button>

                <p className="signin">
                  Already using Startup? <span className="spn">Sign in</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
