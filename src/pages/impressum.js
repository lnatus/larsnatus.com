import React, {Fragment} from 'react'
import '@fontsource/amiri'
import '@fontsource/open-sans'

import Page from '../components/page'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import GlobalStyle from '../components/global-styles'


const ImpressumPage = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <Page>
        <Header title={'Impressum'} />
        <Main>
        <title>Impressum</title>
        <section>
          <h1>Impressum</h1> 
          <h2>Angaben gemäß § 5 TMG:</h2>
          <address>
              Lars Natus<br/>
              Türkismühlerstaße 19<br/>
              66113 Saarbrücken<br/>
              me [at] larsnatus.com
          </address>
          <br/>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: http://ec.europa.eu/consumers/odr Meine E-Mail-Adresse finden Sie oben im Impressum.</p>
          <br/>
          <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </section>
        </Main>
        <Footer/>
      </Page>
    </Fragment>
  )
}

export default ImpressumPage
