import React from 'react'
import styled from 'styled-components'

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
          <a href="/impressum">impressum</a>
        </small>
     </FooterStyled>
    )
  }
  export default Footer