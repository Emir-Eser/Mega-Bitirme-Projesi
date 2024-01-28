import React, { useEffect, useState } from 'react'
import '../styles/Login.css'
import meramBelediyesiLogo from '../images/logos/meram-belediyesi-logo.png'
import Users from '../datas/Users'
import { useNavigate } from "react-router-dom";

function Login(props) {

    const navigate = useNavigate()

    const [users] = Users()

    const [userTCKN, setUserTCKN] = useState(null)
    const [userPassword, setUserPassword] = useState(null)

    function handleLogin(userTCKN, userPassword) {

        const user = users.find((user) => user.TCKN === userTCKN)



        if (user) {
            if (user.password === userPassword) {
                props.setActiveUser(user)
                navigate('/')
            }

            else { alert('Şifrenizi kontrol edin') }
        }

        else {
            alert('T.C. Kimlik numaranızı kontrol edin')
        }

    }

    useEffect(() => {
        if (props.activeUser) {
            navigate('/')
        }
    }, [])



    return (

        <div className='login-form-container-css' >
            <form id='login-form' name='login-form' className='login-form-css' onSubmit={(e) => { e.preventDefault(); handleLogin(userTCKN, userPassword) }}>

                <button className='login-title' onClick={() => { navigate('/') }} >
                    <img className='meram-belediyesi-logo-css' src={meramBelediyesiLogo} alt='Logo' />
                </button>

                <div className='TCKN-input-grid-css' >

                    <div className='TCKN-text-css'>
                        <p>T.C. Kimlik No</p>
                    </div>

                    <div className='TCKN-input-container-css' >
                        <input className='TCKN-input-bar-css' type='text' maxLength='11' minLength='11' required onChange={(e) => { setUserTCKN(e.target.value) }} onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault(); handleLogin(userTCKN, userPassword);
                            }
                        }} />
                    </div>
                </div>

                <div className='password-input-grid-css'>
                    <div className='password-text-css'>
                        <p>Şifre</p>
                    </div>

                    <div className='password-input-container-css' >
                        <input className='password-input-bar-css' type='password' required onChange={(e) => { setUserPassword(e.target.value) }} onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault(); handleLogin(userTCKN, userPassword);
                            }
                        }} />
                    </div>
                </div>

                <div className='login-button-container-css'>
                    <button type='submit' className='login-button-css'>
                        Giriş yap
                    </button>
                </div>

            </form>
        </div>


    )
}

export default Login