import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import InvoiceCard from './components/InvoiceCard';
import RealtyCard from './components/RealtyCard';
import Users from './datas/Users'

import { useState, useEffect } from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import WaterInvoices from './pages/WaterInvoices';
import ElectricInvoices from './pages/ElectricInvoices';
import GasInvoices from './pages/GasInvoices';
import Contact from './pages/Contact';
import Realties from './pages/Realties';


function App() {

    const [users, setUsers] = Users()
    const [activeUser, setActiveUser] = useState(null)






    function makeInvoicePayment(subscription) {
        let newBalanceKr = (users.find((user) => user.TCKN === activeUser.TCKN).balance) * 100

        if (newBalanceKr >= subscription.invoiceCost * 100) {
            newBalanceKr = newBalanceKr - subscription.invoiceCost * 100
            const newUsers = [...users]
            console.log(newUsers)
            newUsers.find((user) => user.TCKN === activeUser.TCKN).balance = (newBalanceKr / 100).toFixed(2)
            subscription.invoiceCost = 0

            setUsers(newUsers)

            localStorage.setItem('users',JSON.stringify(users))


            console.log(users.find((user) => user.TCKN === activeUser.TCKN).balance)
        }

        else {
            alert('Bakiye yetersiz.')
        }
    }

    function makePropertyTaxPayment(realty) {
        let newBalanceKr = (users.find((user) => user.TCKN === activeUser.TCKN).balance) * 100

        if (newBalanceKr >= realty.propertyTax * 100) {
            newBalanceKr = newBalanceKr - realty.propertyTax * 100
            const newUsers = [...users]
            console.log(newUsers)
            newUsers.find((user) => user.TCKN === activeUser.TCKN).balance = (newBalanceKr / 100).toFixed(2)
            realty.propertyTax = 0

            setUsers(newUsers)

            localStorage.setItem('users',JSON.stringify(users))

            console.log(users.find((user) => user.TCKN === activeUser.TCKN).balance)
        }

        else {
            alert('Bakiye yetersiz.')
        }
    }

    
    useEffect(() => {
        if (activeUser) {
            const user = users.find((user) => user.TCKN === activeUser.TCKN)
            setActiveUser(user)
            localStorage.setItem('activeUser',JSON.stringify(activeUser))
        }

        else{
           setActiveUser(JSON.parse(localStorage.getItem('activeUser')))
        }
    },[])

     useEffect(() => {
         if (activeUser) {
             const user = users.find((user) => user.TCKN === activeUser.TCKN)
             setActiveUser(user)
             localStorage.setItem('activeUser',JSON.stringify(activeUser))
         }

         else{
            setActiveUser(JSON.parse(localStorage.getItem('activeUser')))
         }
     })


    return (



        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home activeUser={activeUser} setActiveUser={setActiveUser} />} />

                <Route path='/login' element={<Login activeUser={activeUser} setActiveUser={setActiveUser} />} />

                <Route path='/water-invoices' element={<WaterInvoices activeUser={activeUser} setActiveUser={setActiveUser} makeInvoicePayment={makeInvoicePayment} />} />

                <Route path='/electric-invoices' element={<ElectricInvoices activeUser={activeUser} setActiveUser={setActiveUser} makeInvoicePayment={makeInvoicePayment} />} />

                <Route path='/gas-invoices' element={<GasInvoices activeUser={activeUser} setActiveUser={setActiveUser} makeInvoicePayment={makeInvoicePayment} />} />

                <Route path='/realties' element={<Realties activeUser={activeUser} setActiveUser={setActiveUser} makePropertyTaxPayment={makePropertyTaxPayment} />} />

                <Route path='/contact-us' element={<Contact activeUser={activeUser} setActiveUser={setActiveUser} />} />

            </Routes>

        </BrowserRouter>



        /*       <>

             {users.map((user, i) => {
                return (
                    <div className='aaa' key={i}>
                        {
                            user.water.subscriptions.map((subscription, j) => {
                                return (

                                    <div className='bbb'> <InvoiceCard key={j} invoiceType='water' userTCKN={user.TCKN} subscription={subscription} makeInvoicePayment={makeInvoicePayment} /> </div>

                                )
                            })
                        }

                        {
                            user.electric.subscriptions.map((subscription, j) => {
                                return (

                                    <div className='bbb'>  <InvoiceCard key={j} invoiceType='electric' userTCKN={user.TCKN} subscription={subscription} makeInvoicePayment={makeInvoicePayment} /> </div>

                                )
                            })
                        }

                        {
                            user.gas.subscriptions.map((subscription, j) => {
                                return (

                                    <div className='bbb'> <InvoiceCard key={j} invoiceType='gas' userTCKN={user.TCKN} subscription={subscription} makeInvoicePayment={makeInvoicePayment} /> </div>

                                )
                            })
                        }

                        {
                            user.realties.map((realty, j) => {
                                return (
                                    <div className='bbb'> <RealtyCard key={j} userTCKN={user.TCKN} realty={realty} makePropertyTaxPayment={makePropertyTaxPayment} /> </div>
                                )
                            })
                        }
                    </div>
                )
            })
            }

            {users[0].balance}
        </> */
    )
}

export default App
