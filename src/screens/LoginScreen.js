import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'

function LoginScreen() {
    const [signIn,setSignIn]=useState(false);

    return (
        <div className="LoginScreen">
            <div className="LoginScreen__background">
                <img className='LoginScreen__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt='logo'/>
                <button onClick={()=>setSignIn(true)} className='LoginScreen__button'>
                    Sign in
                </button>
                <div className='LoginScreen__gradient'/>
            </div>
            <div className='LoginScreen__body'>
                {signIn ? (
                    <SignupScreen />
                ) :(
                    <>
                    <h1>Unlimited films, TV programs and more.</h1>
                    <h2>Watch anywhere cancle at any time</h2>
                    <h3>Ready to watch ? Enter your email address to create or restart your mambership</h3>
    
                    <div className="LoginScreen__input">
                        <form>
                            <input type='email' placeholder='Email address'/>
                            <button onClick={()=>setSignIn(true)} className="LoginScreen__getStarted">Get started</button>
                        </form>
                    </div>
                    </>
                )}
              
            </div>


        </div>
    )
}

export default LoginScreen
