import React, { useEffect } from 'react'
import '../styles/Realties.css'
import { useNavigate } from 'react-router-dom';
import RealtyCard from '../components/RealtyCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Realties(props) {

  const navigate = useNavigate();

  useEffect(() => {
    if (!props.activeUser) {
      navigate('/login');
    }
  }, []);


  useEffect(() => {

    if (!props.activeUser) {
      navigate('/login')
    }
  })

  return (
    <>
      {props.activeUser ? <>

        <Header activeUser={props.activeUser} setActiveUser={props.setActiveUser} />


        <div className='realties-container-css' >

          <h2>Taşınmazlar</h2>

          <div className='realties-css'>
            {
              props.activeUser.realties.map((realty) => {
                return (
                  <div className='realty-card-container-css'>
                    <RealtyCard key={realty.no} realty={realty} makePropertyTaxPayment={props.makePropertyTaxPayment} />
                  </div>

                )
              })
            }
          </div>

        </div>

        <Footer />
      </>
        : <> </>
      }
    </>
  )
}

export default Realties