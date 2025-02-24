import { useState } from "react";
import axios from "axios";

function Login() {
    const [email,setEmail] =  useState("")
    const [password,setPassword] =  useState("")

    const handleLogin = async () =>{
      axios.post("http://localhost:3000/login")
    }
    return (
      <div className="flex items-center justify-center min-h-1/2 my-16">
        <div className="card bg-gray-800 text-white w-96 shadow-2xl p-6 rounded-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl font-semibold text-center">Welcome Back!</h2>
            
            <div className="flex flex-col gap-4 mt-4">
              <input 
                type="text" 
                value={email}
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full p-3 rounded-md bg-gray-700 border-gray-600 focus:border-primary focus:outline-none" 
              />
              
              <input 
                type="password" 
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} 
                className="input input-bordered w-full p-3 rounded-md bg-gray-700 border-gray-600 focus:border-primary focus:outline-none" 
              />
            </div>
  
            <div className="card-actions flex flex-col gap-3 mt-6">
              <button 
              className="btn btn-primary w-full py-3 text-lg font-medium">Login</button>
              <p className="text-center text-sm text-gray-400">
                Dont have an account? <a href="#" className="text-primary">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  