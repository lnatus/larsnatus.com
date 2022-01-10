import React from 'react'
import { Helmet } from "react-helmet"
import styled from 'styled-components'

import ICON from '../images/icon.png'

const HeaderStyled = styled.header`
  text-align: center;
  padding: 3em 0;
`

function Header(props) {
    return (
     <HeaderStyled>
        <Helmet>
            <title>{props.title}</title>
        </Helmet>
         <a href="/">
            <img src={ICON} width={140} alt="Lars Natus Logo"></img>
        </a>
     </HeaderStyled>
    )
  }
  export default Header