import React from 'react'
import '../styles/InvoiceCard.css'
import eneryaLogo from '../images/logos/enerya-logo.png'
import koskiLogo from '../images/logos/koski-logo.png'
import mepasLogo from '../images/logos/mepas-logo.svg'


function InvoiceCard(props) {

    if (props.invoiceType === 'water') {
        return (
            <>
                <div className='invoice-card-css'>
                    <div className='invoice-card-grid-css'>
                        <div className='invoice-card-logo-container-css'> <img className='invoice-card-koski-logo-css' src={koskiLogo} alt='logo' /> </div>
                        <div className='invoice-card-info-grid-css'>
                            <div className='subscription-no-css'>
                                Abone no: {props.subscription.no}
                            </div>
                            <div className='invoice-cost-css'>
                                {(props.subscription.invoiceCost !== 0) ?
                                    <>Fatura bedeli: {props.subscription.invoiceCost.toFixed(2)} TL </>
                                    :
                                    <p>Fatura bedeli: Borcunuz yok</p>}
                            </div>
                            <div className='invoice-payment-button-container-css'>

                                {(props.subscription.invoiceCost !== 0) ?
                                    (<button className='invoice-payment-button-css' onClick={() => { props.makeInvoicePayment(props.subscription) }}>
                                        ödeme yap
                                    </button>)
                                    : <button className='invoice-payment-button-css' onClick={() => { alert('Borcunuz yok.') }} >Ödendi</button>
                                }



                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    else if (props.invoiceType === 'electric') {
        return (
            <>
                <div className='invoice-card-css'>
                    <div className='invoice-card-grid-css'>
                        <div className='invoice-card-logo-container-css'> <img className='invoice-card-mepas-logo-css' src={mepasLogo} alt='logo' /> </div>
                        <div className='invoice-card-info-grid-css'>
                            <div className='subscription-no-css'>
                                Abone no: {props.subscription.no}
                            </div>
                            <div className='invoice-cost-css'>
                                {(props.subscription.invoiceCost !== 0) ?
                                    <>Fatura bedeli: {props.subscription.invoiceCost.toFixed(2)} TL </>
                                    :
                                    <p>Fatura bedeli: Borcunuz yok</p>}                            </div>
                            <div className='invoice-payment-button-container-css'>
                                {(props.subscription.invoiceCost !== 0) ?
                                    (<button className='invoice-payment-button-css' onClick={() => { props.makeInvoicePayment(props.subscription) }}>
                                        ödeme yap
                                    </button>)
                                    : <button className='invoice-payment-button-css' onClick={() => { alert('Borcunuz yok.') }} >Ödendi</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    else if (props.invoiceType === 'gas') {
        return (
            <>
                <div className='invoice-card-css'>
                    <div className='invoice-card-grid-css'>
                        <div className='invoice-card-logo-container-css'> <img className='invoice-card-enerya-logo-css' src={eneryaLogo} alt='logo' /> </div>
                        <div className='invoice-card-info-grid-css'>
                            <div className='subscription-no-css'>
                                Abone no: {props.subscription.no}
                            </div>
                            <div className='invoice-cost-css'>
                                {(props.subscription.invoiceCost !== 0) ?
                                    <>Fatura bedeli: {props.subscription.invoiceCost.toFixed(2)} TL </>
                                    :
                                    <p>Fatura bedeli: Borcunuz yok</p>}                            </div>
                            <div className='invoice-payment-button-container-css'>
                                {(props.subscription.invoiceCost !== 0) ?
                                    (<button className='invoice-payment-button-css' onClick={() => { props.makeInvoicePayment(props.subscription) }}>
                                        ödeme yap
                                    </button>)
                                    : <button className='invoice-payment-button-css' onClick={() => { alert('Borcunuz yok.') }} >Ödendi</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default InvoiceCard