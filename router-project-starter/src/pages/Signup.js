import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

export default function Signup({setIsLoggedIn}) {
  return (
    <Template
    title="signup"
    desc1="signup1 to your account"
    desc2="signup2 to your account"
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}

/>
  )
}
