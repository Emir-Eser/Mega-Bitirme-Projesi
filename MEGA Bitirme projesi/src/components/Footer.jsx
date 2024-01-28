import React from 'react'
import '../styles/Footer.css'
import footerMeramBelediyesiLogo from '../images/logos/footer-meram-belediyesi-logo.svg'

function Footer() {
    return (

        <>
            <div className='footer-container-css'>

                <div className='footer-meram-belediyesi-logo-container-css'>
                    <img className='footer-meram-belediyesi-logo-css' src={footerMeramBelediyesiLogo} />
                </div>
                <div className='footer-meram-belediyesi-contact-us-css'>
                    <div className='footer-contact-us-title-css'>
                        MERAM BELEDİYESİ ÇÖZÜM MERKEZİ
                    </div>

                    <div className='footer-contact-us-number-css'>
                        444 3 042
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer