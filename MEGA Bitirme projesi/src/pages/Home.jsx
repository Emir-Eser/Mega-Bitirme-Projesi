import React from 'react'
import '../styles/Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home(props) {
  return (
    <>
    
      <Header activeUser={props.activeUser} setActiveUser={props.setActiveUser} /> 

      <div className='home-container-css'>
        <div className='home-title-css' >
         <h1> Meram Belediyesi Online İşlemler'e Hoş Geldiniz</h1>
        </div>

        <div className='home-contents-container-css' > 

        Meram Belediyesi Online İşlemler, şehir sakinlerine hızlı, güvenli ve kullanıcı dostu bir çevrimiçi platform sunar.
         Bu platform aracılığıyla, su, elektrik, doğalgaz faturalarınızı ödemenin yanı sıra emlak vergilerinizi kolayca yönetebilirsiniz.
          Giriş yaparak belediye hizmetlerine ve ödemelerinize erişim sağlamak artık daha kolay. Kullanıcı dostu arayüzü sayesinde, 
          her an her yerden işlemlerinizi gerçekleştirebilir, güvenli ödeme seçenekleriyle finansal işlemlerinizi sorunsuz bir şekilde tamamlayabilirsiniz.
           Meram Belediyesi Online İşlemler, şehir sakinlerine modern, etkili ve kullanıcı dostu bir dijital deneyim sunarak yaşamı kolaylaştırmayı hedefliyor. 
           Hoş geldiniz, daha iyi bir belediye hizmeti için buradayız!
        </div>
      </div>

      <Footer />
    
    </>
  
  )
}

export default Home