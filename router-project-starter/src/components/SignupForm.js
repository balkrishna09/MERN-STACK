import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
// import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router'


export default function SignupForm({setIsLoggedIn}) {

    const[formData,setFormData]= useState({
        firstname:"",lastname:"",email:"",password:"",confirmpassword:""
    })

    const[showPass,setShowPass] = useState(false);

    const navigate = useNavigate();
    
    function changeHandler(event){
        setFormData((prev)=>({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password!==formData.confirmpassword){
            toast.error('password do not match')
            return;
        }
        setIsLoggedIn(true);
        toast.success('Account created');
        const data = {
            ...formData
        };
        console.log(data);
        navigate("/dashboard")


}

  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form onSubmit={submitHandler}>
            {/* first name and last name div */}
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input required type='text' name="firstname" onChange={changeHandler} placeholder="enter first name" value={formData.firstname}/>
                </label>

                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input required type='text' name="lastname" onChange={changeHandler} placeholder="enter last name" value={formData.lastname}/>
                </label>
            </div>

            {/* email field */}
            <label>
                <p>Email<sup>*</sup></p>
                <input required type='email' name="email" onChange={changeHandler} placeholder="enter email" value={formData.email}/>
            </label>

            {/* password section */}
            <div>
                <label>
                    
                    <p>create Password<sup>*</sup></p>
                    
                    <input required type={showPass?("text"):("password")} name="password" onChange={changeHandler} placeholder="password" value={formData.password}/>
                    
                    <span onClick={()=> setShowPass((prev) => !prev)}>
                        {showPass? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
                    </span>
                
                </label>

                <label>
                    
                    <p>confirm Password<sup>*</sup></p>
                    
                    <input required type={showPass?("text"):("password")} name="confirmpassword" onChange={changeHandler} placeholder="confirm password" value={formData.confirmpassword}/>
                    
                    <span onClick={()=> setShowPass((prev) => !prev)}>
                        {showPass? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
                    </span>
                
                </label>
            </div>

            <button>
                Create Account
            </button>

        </form>
    </div>
  )
}