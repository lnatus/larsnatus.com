import React, {Fragment} from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import '@fontsource/amiri'
import '@fontsource/open-sans'

import GlobalStyle from '../components/global-styles'
import CV from '../files/Lars-Natus-CV.pdf'
import ISO from '../files/Lars-Natus-Information-Security-Officer.pdf'

const Main = styled.div`
  text-align: center;
  padding: 0 2em;
  p {
    margin: 0 0 10px 0;
  }
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 50%;
  }
`
const Header = styled.header`
  padding: 3em 0;
`

const Intro = styled.section`
`
const Bio = styled.section`
  a {
    display: inline-block;
    margin: 0.5em;
  }
`
const Services = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
const Quote = styled.section`
  margin: 3em 0;
  padding: 4em 1em;
  text-align: center;
  border-top: 1px solid #DDD;
  border-bottom: 1px solid #DDD;
  font-style: italic;
`
const Footer = styled.footer`
  margin-bottom: 3em;
`

const IndexPage = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <Main>
      <title>Lars Natus</title>
      <Header>
        <a href="/">
          <StaticImage src="../images/icon.svg" width={80} alt="Lars Natus"></StaticImage> 
        </a>
      </Header>
        <StaticImage src="../images/me.png" width={300} alt="Lars Natus"></StaticImage>
      <Intro>
        <h1>Lars Natus</h1> 
        <h2>Solution Architekt &middot;
            Projektmanager &middot;
            Information Security Officer
        </h2>
      </Intro>
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
            <StaticImage src="../images/tüv-süd.png" width={48} alt="Lars Natus linkedIn"></StaticImage> 
          </a>
        </div>
        <h4>Services</h4>
        <Services>
          <li>
            Microsoft 365 Consulting
          </li>
          <li>
            Microsoft 365 Development
          </li>
          <li>
            Agiles Projektmanagement 
          </li>
          <li>
            Information Security Consulting
          </li>
        </Services>
        <h4>Kontakt</h4>
        <p>Saarbrücken, Germany
        <br></br>
        me [at] larsnatus.com</p>
        <a href="https://www.linkedin.com/in/larsnatus/" target="_blank" rel="noreferrer">
          <StaticImage src="../images/linkedIn.svg" width={48} alt="Lars Natus linkedIn"></StaticImage> 
        </a>
        <a href="https://fb.me/larsnatus" target="_blank" rel="noreferrer">
          <StaticImage src="../images/facebook.svg" width={48} alt="Lars Natus facebook"></StaticImage> 
        </a>
        <div>
          <a href={CV} target="_blank" rel="noreferrer">
            Lebenslauf ansehen
          </a>
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
      <Footer>
        <small>
        © 2022 &middot; made with ♥️ by larnatus.com 
        <br></br>
        <a href="/impressum">impressum</a>
        </small>
      </Footer>
    </Main>
    </Fragment>
  )
}

export default IndexPage
