import React from 'react'
import '../styles/RealtyCard.css'

function RealtyCard(props) {
    return (
        <>

            <div className='realty-card-css'>

                <div className='realty-card-grid-css'>

                    <div className='realty-card-title-css'>
                        Taşınmaz no: {props.realty.no}
                    </div>

                    <div className='realty-card-info-grid-css'>

                        <div className='realty-card-property-info-css'>
                            Nitelik: {props.realty.property}
                        </div>

                        <div className='realty-card-blockNo-info-css'>
                            Ada no: {props.realty.blockNo}
                        </div>

                        <div className='realty-card-parcelNo-info-css'>
                            Parsel no: {props.realty.parcelNo}
                        </div>

                        <div className='realty-card-propertyTax-info-css'>
                            {(props.realty.propertyTax !== 0) ?
                                <>Emlak vergisi borcu: {(props.realty.propertyTax).toFixed(2)} TL</>
                                :
                                <p>Emlak vergisi borcu: Borcunuz yok</p>
                            }

                        </div>

                        <div className='propertyTax-payment-button-container-css'>
                            {(props.realty.propertyTax !== 0) ?
                                <button className='propertyTax-payment-button-css' onClick={() => { props.makePropertyTaxPayment(props.realty) }}>
                                    Ödeme yap
                                </button>
                                :
                                <button className='propertyTax-payment-button-css' onClick={() => { alert('Borcunuz yok.') }} >
                                    Ödendi
                                </button>

                            }
                        </div>

                    </div>

                </div>

            </div>

        </>

    )
}

export default RealtyCard