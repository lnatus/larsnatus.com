import React, {Fragment} from 'react'
import styled from 'styled-components'
import '@fontsource/amiri'
import '@fontsource/open-sans'

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import GlobalStyle from '../components/global-styles'
import Link from '../components/link'

import CV from '../files/Lars-Natus-CV.pdf'
import ISO from '../files/Lars-Natus-Information-Security-Officer.pdf'
import ME from '../images/me.png'
import TUEV from '../images/tüv-süd.png'
import LI from '../images/linkedIn.svg'
import FB from '../images/facebook.svg'
import SM365 from '../images/service-m365.svg'
import SAGILE from '../images/service-agile.svg'
import SDESIGN from '../images/service-design.svg'
import SISC from '../images/service-isc.svg'

const Bio = styled.section`
  a {
    display: inline-block;
    margin: 0.5em;
  }
  p:first-of-type {
    text-align: justify;
  }
`

const Services = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin: 10px;
  }
`

const Quote = styled.section`
  margin: 3em 0;
  padding: 4em 1em;
  text-align: center;
  border-top: 1px solid #DDD;
  border-bottom: 1px solid #DDD;
  font-style: italic;
`

const IndexPage = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <Header title={'Lars Natus'}/>
      <Main>
      <img src={ME} width={300} alt="Lars Natus"></img>
      <section>
        <h1>Lars Natus</h1> 
        <h2>Solution Architekt &middot;
            Projektmanager &middot;
            Information Security Officer
        </h2>
      </section>
      <Bio>
        <h4>Hallo</h4>
        <p>
          Mein Name ist Lars Natus. 
          Ich bin ein freiberuflicher Solution Architekt und helfe Menschen dabei ihre digitale Strategie zu verwirklichen. 
          Mit mehr als 10 Jahren Erfahrung im Bereich Software Entwicklung und agilem Projektmanagement schlage ich die Brücke zwischen technischer Beratung und Implementierung. 
          Mit einem geschulten Auge für Design und der Freude am Erstellen von neuen Inhalten, unterstütze ich darüber hinaus auch in den Bereichen Visualisierung und Content Creation.
        </p>
        <div>
          <a href={ISO} target="_blank" rel="noreferrer">
            <img src={TUEV} width={48} alt="Lars Natus Information Security Officer"></img>
          </a>
        </div>
        <h4>Services</h4>
        <Services>
          <li>
            <img src={SM365} width={180} alt="M365 Consulting & Development"></img>
          </li>
          <li>
            <img src={SAGILE} width={180} alt="Agile Project Management"></img>
          </li>
          <li>
           <img src={SDESIGN} width={180} alt="Design & Content Creation"></img>
          </li>
          <li>
            <img src={SISC} width={180} alt="Information Security Consulting"></img>
          </li>
        </Services>
        <h4>Kontakt</h4>
        <p>Saarbrücken, Germany
        <br></br>
        me [at] larsnatus.com</p>
        <a href="https://www.linkedin.com/in/larsnatus/" target="_blank" rel="noreferrer">
         <img src={LI} width={48} alt="Lars Natus linkedIN"></img>
        </a>
        <a href="https://fb.me/larsnatus" target="_blank" rel="noreferrer">
          <img src={FB} width={48} alt="Lars Natus facebook"></img>
        </a>
        <div>
          <Link href={CV} target="_blank" rel="noreferrer">
            Lebenslauf ansehen
          </Link>
        </div>
      </Bio>
      <Quote>
        <p>
          Some people want it to happen 
          <br></br>
          Some wish it would happen 
          <br></br>
          Others make it happen
        </p>
       <small>- Michael Jordan</small>
      </Quote>   
    </Main>
    <Footer/> 
    </Fragment>
  )
}

export default IndexPage
