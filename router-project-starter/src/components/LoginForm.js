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
        const data={...formData}
        console.log(data);

    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email address
                <sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required 
            type="email" 
            value={formData.email} 
            onChange={changeHandler} 
            placeholder='enter email id' 
            name="email"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>


        <label className='w-full relative'>
            
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>

            <input 
            required 
            type={showPass?("text"):("password")} 
            value={formData.password} 
            onChange={changeHandler} 
            placeholder='Password' 
            name="password"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            
            <span onClick={()=> setShowPass((prev) => !prev)}
            className=' absolute right-3 top-[38px] cursor-pointer'>
                {showPass? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): 
                    
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 text-right'>
                    Forgot Password
                </p>
            </Link>
            
            
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-8'>
            Sign In
        </button>

    </form>
  )
}
