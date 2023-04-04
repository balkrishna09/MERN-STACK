import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function LoginForm({setIsLoggedIn}) {

    const [formData,setFormData] = useState({email:"" , password:""});
    const [showPass,setShowPass] = useState(false);

    const  navigate = useNavigate();

    function changeHandler(event){
        setFormData((prev)=>({
            ...prev,
            [event.target.name]: event.target.value
        }))

    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        navigate("/dashboard");

    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email address<sup>*</sup></p>
            <input required type="email" value={formData.email} onChange={changeHandler} placeholder='enter email id' name="email"/>
        </label>
        <label>
            <p>Password<sup>*</sup></p>

            <input required type={showPass?("text"):("password")} value={formData.password} onChange={changeHandler} placeholder='Password' name="password"/>
            
            <span onClick={()=> setShowPass((prev) => !prev)}>
                {showPass? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
            </span>

            <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>
            
            
        </label>

        <button>
            Sign In
        </button>

    </form>
  )
}
