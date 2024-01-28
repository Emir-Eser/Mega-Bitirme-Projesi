import React from 'react'
import '../styles/Contact.css'
import Footer from '../components/Footer'
import Header from '../components/Header'


function Contact(props) {
  return (

    <>

      <Header activeUser={props.activeUser} setActiveUser={props.setActiveUser} />

      <div className='contact-us-info-container-css' >
        <div className='contact-us-info-grid-css' >

          <div className='contact-us-info-title-css' >
            Meram Belediyesi Hizmet Binası
          </div>

          <div className='contact-us-info-unit-css'>
            <div className='contact-us-info-key-css'>
              Adres
            </div>

            <div className='contact-us-info-value-css' >

              : Yenişehir Mah. Azerbaycan Cad. No: 5 42010 Meram / KONYA
            </div>
          </div>

          <div className='contact-us-info-unit-css'>
            <div className='contact-us-info-key-css'>
              Telefon
            </div>

            <div className='contact-us-info-value-css' >
              : 0332 320 10 00
            </div>
          </div>

          <div className='contact-us-info-unit-css'>
            <div className='contact-us-info-key-css'>
              Eposta
            </div>

            <div className='contact-us-info-value-css' >
              : bizimmeram@meram.bel.tr
            </div>
          </div>

          <div className='contact-us-info-unit-css'>
            <div className='contact-us-info-key-css'>
              Kep Adresi
            </div>

            <div className='contact-us-info-value-css' >
              : merambelediyesi@hs01.kep.tr
            </div>
          </div>

          <div className='contact-us-info-unit-css'>
            <div className='contact-us-info-key-css'>
              E Tebligat
            </div>

            <div className='contact-us-info-value-css' >
              : 35846-96487-38597
            </div>
          </div>

          <div className='contact-us-info-unit-css'>
            <div className='contact-us-info-key-css'>
              IBAN
            </div>

            <div className='contact-us-info-value-css' >
              : TR33 0001 2009 5240 0007 0000 02
            </div>
          </div>

        </div>
      </div>

      <Footer />

    </>

  )
}

export default Contact