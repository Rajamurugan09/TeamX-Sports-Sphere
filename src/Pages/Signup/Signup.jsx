import React from 'react'
import { useNavigate } from 'react-router-dom' // Step 1
import './signup.css'

const Signup = () => {
  const navigate = useNavigate() // Step 2

  const handleNavigation = () => {
    navigate('/') // Step 3: Navigate to the home page
  }

  return (
    <div className='main-content'>
      <div className='div-form1'>
        <form className='form'>
          <p>Welcome to Teamx</p>
          <h6 className='please'>Please Signup to continue</h6>

          <button className='oauthButton'>
            <svg className='icon' viewBox='0 0 24 24'>
              <path
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                fill='#4285F4'
              ></path>
              <path
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                fill='#34A853'
              ></path>
              <path
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                fill='#FBBC05'
              ></path>
              <path
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                fill='#EA4335'
              ></path>
              <path d='M1 1h22v22H1z' fill='none'></path>
            </svg>
            Continue with Google
          </button>

          <div className='separator'>
            <div></div>
            <span>OR</span>
            <div></div>
          </div>

          <input type='name' placeholder='Username' name='name' />
          <input type='email' placeholder='Email' name='email' />
          <input type='password' placeholder='Password' name='email' />
          <input type='password' placeholder='Confirm Password' name='email' />

          <button className='oauthButton1' onClick={handleNavigation}>
            {' '}
            {/* Step 4: Move onClick here */}
            Let's go
            <svg
              className='icon'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m6 17 5-5-5-5'></path>
              <path d='m13 17 5-5-5-5'></path>
            </svg>
          </button>

          <div className='separator'>
            <div></div>
            <span>OR</span>
            <div></div>
          </div>

          <h6>Already have an account? Login</h6>
        </form>
      </div>
    </div>
  )
}

export default Signup
