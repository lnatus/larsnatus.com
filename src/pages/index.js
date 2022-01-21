import React, {Fragment} from 'react'
import styled from 'styled-components'
import '@fontsource/amiri'
import '@fontsource/open-sans'

import Page from '../components/page'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import GlobalStyle from '../components/global-styles'
import Link from '../components/link'
import WorkList from '../components/work-list'
import Middot from '../components/middot'

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
import HELLO from '../images/hello.svg'
import SERVICES from '../images/services.svg'
import WORK from '../images/work.svg'
import CONTACT from '../images/contact.svg'
import MJ from '../images/michael-jordan.svg'

const Section = styled.section`
  a {
    display: inline-block;
    margin: 0.5em;
  }

  margin: 0 auto;
  @media only screen and (min-width: 1024px) {
    max-width: 60%;
  }
`

const Intro = styled.section`
  background-image: linear-gradient(-45deg, #11A8DB 0%, #612CB8 100%);
  border-radius: 30px;
  margin: 90px auto;
  box-sizing: border-box;
  padding: 60px 15px;
  p {
    margin-top: 30px;
  }
  img {
    max-width: 90%;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 60%;
    padding: 60px;
  }
`

const Services = styled.ul`
  margin: 60px auto;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin: 10px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 60%;
    padding: 60px;
  }
`

const Work = styled.div`
  background: #1d1d1f;
  margin: 90px auto;
  border-radius: 30px;
  padding: 60px 15px;
  box-sizing: border-box;

  img {
    margin-bottom: 30px;
    max-width: 90%;
  }

  @media only screen and (min-width: 1024px) {
    padding: 60px;
  }
`

const Quote = styled.section`
  box-sizing: border-box; 
  padding: 60px 15px;
  text-align: center;
  font-style: italic;
  margin: 90px auto;
  background-image: linear-gradient(-45deg, #11DBB4 0%, #11A8DB 100%);

  border-radius: 30px;
  img {
    max-width: 90%;
    margin-top: 30px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 60%;
    padding: 60px;
  }
`

const Contact = styled.section`
  background-image: linear-gradient(-45deg, #4060C6 0%, #11A8DB 100%);
  border-radius: 30px;
  margin: 90px auto 0px;
  box-sizing: border-box;
  padding: 60px 15px;
  p {
    margin-top: 30px;
  }
  img {
    max-width: 90%;
  }

  @media only screen and (min-width: 1024px) {
    padding: 60px;
  }
`

const IndexPage = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <Page>
      <Header title={'Lars Natus'}/>
      <Main>
        <img src={ME} width={400} alt="Lars Natus"></img>
        <section>
          <h1>Lars Natus</h1> 
          <h2>Solution Architekt <Middot /> 
              Projektmanager <Middot /> 
              Information Security Officer
          </h2>
      </section> 
      <Intro>
        <img src={HELLO} width={500} alt="Lars Natus"></img>
        <p>
          Mein Name ist Lars Natus. 
          Ich bin ein freiberuflicher Solution Architekt und helfe Menschen dabei ihre digitale Strategie zu verwirklichen. 
          Mit mehr als 10 Jahren Erfahrung im Bereich Software Entwicklung und agilem Projektmanagement schlage ich die Brücke zwischen technischer Beratung und Implementierung. 
          Mit einem geschulten Auge für Design und der Freude am Erstellen von neuen Inhalten, unterstütze ich darüber hinaus auch in den Bereichen Visualisierung und Content Creation.
        </p>
      </Intro>
        <img src={SERVICES} width={240} alt="Services"></img>
        <Services>
          <li>
            <img src={SM365} width={330} alt="M365 Consulting & Development"></img>
          </li>
          <li>
            <img src={SAGILE} width={330} alt="Agile Project Management"></img>
          </li>
          <li>
           <img src={SDESIGN} width={330} alt="Design & Content Creation"></img>
          </li>
          <li>
            <img src={SISC} width={330} alt="Information Security Consulting"></img>
          </li>
        </Services>
      <Section>
        <Work>
          <img src={WORK} width={240} alt="Work"></img>
          <WorkList></WorkList>
        </Work>
        <Contact>
          <img src={CONTACT} width={300} alt="Lars Natus"></img>
          <p>Saarbrücken, Deutschland
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
              Lebenslauf
            </Link>
          </div>
            <a href={ISO} target="_blank" rel="noreferrer">
              <img src={TUEV} width={48} alt="Lars Natus Information Security Officer"></img>
            </a>
          </Contact>
        </Section>
      <Quote>
        <p>
          Some people want it to happen 
          <br></br>
          Some wish it would happen 
          <br></br>
          Others make it happen
        </p>
        <img src={MJ} width={500} alt="Lars Natus"></img>
      </Quote>   
    </Main>
    <Footer/> 
    </Page>
    </Fragment>
  )
}

export default IndexPage
