import React, { useEffect } from 'react'
import '../styles/GasInvoices.css'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import InvoiceCard from '../components/InvoiceCard';
import Footer from '../components/Footer';

function GasInvoices(props) {

  const navigate = useNavigate();



  useEffect(() => {

    if (!props.activeUser) {
      navigate('/login')
    }
  })


  return (

    <>
{   props.activeUser ? <>
    
      <Header activeUser={props.activeUser} setActiveUser={props.setActiveUser} />


      <div className='gas-invoices-container-css' >

        <h2>Doğalgaz Faturaları</h2>

        <div className='gas-invoices-css'>
          {
            props.activeUser.gas.subscriptions.map((subscription) => {
              return (
                <div className='gas-invoice-card-container-css'>
                  <InvoiceCard key={subscription.no} invoiceType='gas' subscription={subscription} makeInvoicePayment={props.makeInvoicePayment} />
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

export default GasInvoices