import React from "react"
import { Link } from "gatsby"

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import GlobalStyle from '../components/global-styles'

const NotFoundPage = () => {
  return (
    <main>
      <GlobalStyle/>
      <Header title={'404'}/>
      <Main>
        <title>404</title>
        <h1>404</h1>
        <p>
          Whoooops!{" "}
          <span role="img" aria-label="Pensive emoji">
          😔
          </span>
          {" "}Diese Seite konnte nicht gefunden werden.
          <br />
          <Link to="/">Zurück zum Start</Link>
        </p>
      </Main>
      <Footer/>
    </main>
  )
}

export default NotFoundPage
