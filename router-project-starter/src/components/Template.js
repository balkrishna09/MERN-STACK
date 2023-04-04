import React from 'react'
import FrameImg from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'


export default function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
    <div>
        <div>
            <h1>{title}</h1>

            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : 
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign in with Google</p>
            </button>
        </div>

        <div>
            <img src={FrameImg} alt="Patter" width={558} heigh={504} loading='lazy'/>
            <img src={image} alt="Patter" width={558} heigh={504} loading='lazy'/>
        </div>
    </div>
  )
}
