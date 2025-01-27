import '../styles/Form.css'
import React, { useState } from 'react'


const Form = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassqord] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorUserName, setErrorUserName] = useState('')
    const [ errorEmail, setErrorEmail] = useState('')
    const [ errorPassword, setErrorPassword] = useState('')
    const [ errorConfirmPassword, setErrorConfirmaPassWord] = useState('')

    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

    const validate = e => {
        e.preventDefault()

        if(userName.length > 8){
            setErrorUserName('')
            setUserColor('green')
        } else{
            setErrorUserName('User name must be more than 8 letters')
            setUserColor('red')
        }

        if(email.includes('@gmail')){
            setErrorEmail('')
            setEmailColor('green')
        } else{
            setErrorEmail('Email not valid, must have @gmail')
            setEmailColor('red')
        }

        if(password.length > 8){
            setErrorPassword('')
            setPasswordColor('green')
        } else{
            setErrorPassword('Password should be more than 8 letters')
            setPasswordColor('red')
        }

        if(password !== '' && password === confirmPassword){
            setErrorConfirmaPassWord('')
            setConfirmPasswordColor('green')
        } else{
            setErrorConfirmaPassWord("Password didn't match")
            setConfirmPasswordColor('red')
        }

    }

  return (
    <>
        <div className='card'>
            <div className="card-image"></div>

            <form>
                <input 
                    type="text" 
                    placeholder='Name' 
                    style={{ borderColor: userColor}} 
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <p className='error'>{errorUserName}</p>

                <input 
                    type="email"  
                    placeholder='Email'
                    style={{borderColor: emailColor}}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <p className='error'>{errorEmail}</p>    

                <input 
                    type="password"  
                    placeholder='Password'
                    style={{borderColor: passwordColor}}
                    value={password}
                    onChange={e => setPassqord(e.target.value)}
                />
                <p className='error'>{errorPassword}</p>  

                <input 
                    type="password" 
                    placeholder='Confirm Password' 
                    style={{borderColor: confirmPassword}}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <p className='error'>{errorConfirmPassword}</p> 

                <button className='submit-btn' onClick={validate}>Submit</button>

            </form>
        </div>
    </>
  )
}

export default Form