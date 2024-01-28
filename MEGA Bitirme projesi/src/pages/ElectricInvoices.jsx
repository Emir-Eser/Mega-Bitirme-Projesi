import React, { useEffect } from 'react'
import '../styles/ElectricInvoices.css'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import InvoiceCard from '../components/InvoiceCard';
import Footer from '../components/Footer';

function ElectricInvoices(props) {

  const navigate = useNavigate();


  useEffect(() => {
    if (!props.activeUser) {
      navigate('/login');
    }
  });



  return (

    <>
      {props.activeUser ? <>

        <Header activeUser={props.activeUser} setActiveUser={props.setActiveUser} />


        <div className='electric-invoices-container-css' >

          <h2>Elektrik Faturaları</h2>

          <div className='electric-invoices-css'>
            {
              props.activeUser.electric.subscriptions.map((subscription) => {
                return (
                  <div className='electric-invoice-card-container-css'>
                    <InvoiceCard key={subscription.no} invoiceType='electric' subscription={subscription} makeInvoicePayment={props.makeInvoicePayment} />
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

export default ElectricInvoices