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

    const[accountType, setAccountType]= useState('student');

    const[showPass,setShowPass] = useState(false);
    
    const[confirmShowPass,setConfirmShowPass] = useState(false);

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
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            
            <button onClick={() => setAccountType('student')} 
            className={`${accountType==="student" ? "bg-richblack-900 text-white py-2 px-5 rounded-full transition-all duration-200 " :"bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200 " }`}>
                Student
            </button>


            <button onClick={() =>setAccountType('instructor')}
            className={`${accountType==="instructor" ? "bg-richblack-900 text-white py-2 px-5 rounded-full transition-all duration-200 " :"bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200 " }`}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            {/* first name and last name div */}
            <div className='flex justify-between mt-4'>
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        First Name
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input required type='text' name="firstname" onChange={changeHandler} placeholder="enter first name" value={formData.firstname}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>

                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Last Name
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input required type='text' name="lastname" onChange={changeHandler} placeholder="enter last name" value={formData.lastname}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>
            </div>

            {/* email field */}
            <div className='mt-4'>
                <label>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input required type='email' name="email" onChange={changeHandler} placeholder="enter email" value={formData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>
            </div>
            

            {/* password section */}
            <div className='flex justify-between mt-4 '>
                <label className='relative'>
                    
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        create Password
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    
                    <input required type={showPass?("text"):("password")} name="password" onChange={changeHandler} placeholder="password" value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    
                    <span onClick={()=> setShowPass((prev) => !prev)}
                    className=' absolute right-3 top-[38px] cursor-pointer'>
                        {showPass? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                
                </label>

                <label className='relative'>
                    
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        confirm Password
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    
                    <input required type={confirmShowPass?("text"):("password")} name="confirmpassword" onChange={changeHandler} placeholder="confirm password" value={formData.confirmpassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    
                    <span onClick={()=> setConfirmShowPass((prev) => !prev)}
                    className=' absolute right-2 top-[40px] cursor-pointer'>
                        {confirmShowPass? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                
                </label>
            </div>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-8 w-full' >
                Create Account
            </button>

        </form>
    </div>
  )
}