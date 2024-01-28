import React from 'react'
import '../styles/Header.css'
import headerMeramBelediyesiLogo from '../images/logos/meram-belediyesi-yıldız-logo.png'
import { Link, useNavigate } from 'react-router-dom'

function Header(props) {

    const navigate = useNavigate()

    return (
        <div className='header-css'>

            <button className='header-logo-button-css' onClick={()=>{navigate('/')}}> <img className='header-meram-belediyesi-logo-css' src={headerMeramBelediyesiLogo} /> </button>

            <div className='header-title-css'>
               <button className='header-title-button-css' onClick={()=>{navigate('/')}}>Meram Belediyesi Online İşlemler</button>
            </div>

            <div className='header-links-container-css' >
                <Link className='header-links-css' to='/water-invoices'>Su Faturaları</Link>

                <Link className='header-links-css' to='/electric-invoices'>Elektrik Faturaları </Link>

                <Link className='header-links-css' to='/gas-invoices'>Gaz Faturaları </Link>

                <Link className='header-links-css' to='/realties'>Taşınmazlar </Link>

                <Link className='header-links-css' to='/contact-us'>İletişim </Link>
            </div>

            <div className='header-account' >

                {
                    props.activeUser ?

                        <div className='header-account-info-container-css'>
                            <div className='header-account-info-css' >
                                <div className='header-user-name-css'>{props.activeUser.name}</div>
                                <div className='header-user-balance-css'>{Number(props.activeUser.balance).toFixed(2)} TL</div>
                            </div>


                            <button className='header-logout-button-css' onClick={()=>{props.setActiveUser(null);localStorage.setItem('activeUser',JSON.stringify(null))}} >
                                 Çıkış yap 
                                 </button>

                        </div>
                        :
                        <>
                            <button className='header-login-button-css' onClick={() => { navigate('/login') }} >
                                Giriş yap
                            </button>
                        </>
                }

            </div>

        </div>
    )
}

export default Header