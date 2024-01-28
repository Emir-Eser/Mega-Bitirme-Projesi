import React, { useEffect } from 'react'
import '../styles/WaterInvoices.css'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import InvoiceCard from '../components/InvoiceCard';
import Footer from '../components/Footer';

function WaterInvoices(props) {

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


      <div className='water-invoices-container-css' >

        <h2>Su Faturaları</h2>

        <div className='water-invoices-css'>
          {
            props.activeUser.water.subscriptions.map((subscription) => {
              return (
                <div className='water-invoice-card-container-css'>
                  <InvoiceCard key={subscription.no} invoiceType='water' subscription={subscription} makeInvoicePayment={props.makeInvoicePayment} />
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

export default WaterInvoices