import React , {Fragment} from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import Page from '../components/page'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import GlobalStyle from '../components/global-styles'

const NotFound = styled.div`
  min-height: 1000px;
`

const NotFoundPage = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <Page>
      <Header title={'404'}/>
      <Main>
        <NotFound>
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
        </NotFound>
      </Main>
      </Page>
      <Footer/>
    </Fragment>
  )
}

export default NotFoundPage
