import React from 'react'
import styled from 'styled-components'

import Link from './link'

const FooterStyled = styled.footer`
  text-align: center;
  margin-bottom: 3em;
`
function Footer(props) {
    return (
     <FooterStyled>
         <small>
          © 2022 &middot; made with ♥️ by larnatus.com 
          <br></br>
          <Link href="/impressum">impressum</Link>
        </small>
     </FooterStyled>
    )
  }
  export default Footer