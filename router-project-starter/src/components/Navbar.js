import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
// import {Singup} from '../pages/Singup'
// import {useState} from 'react'
import {toast} from 'react-hot-toast'

export default function Navbar({isLoggedIn, setIsLoggedIn}) {
    

  return (
    <div className='flex justify-evenly'>

        <Link to="/">
            <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-3 ml-5 mr-3'>
            {!isLoggedIn &&
                <Link to="/login">
                    <button>Login</button>
                </Link>
            }
            {!isLoggedIn &&
                <Link to="/Signup">
                    <button>
                        Signup
                    </button>
                </Link>
            }
            {isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}>
                        Logout
                    </button>
                </Link>
            }
            {isLoggedIn &&
                <Link to="/Dashboard">
                    <button>Dashboard</button>
                </Link>
            }
        </div>

    </div>
  )
}
