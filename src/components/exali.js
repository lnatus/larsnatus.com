import React from 'react'
import styled from 'styled-components'

const ExaliStyled = styled.footer`
  text-align: center;
  margin-bottom: 3em;
`
function Exali() {
    return (
     <ExaliStyled>
        <a rel="noopener noreferrer nofollow"
          href="https://www.exali.de/siegel/Lars-Natus"
          target="_blank"
          title="Lars Natus IT-Haftpflicht">
          <img border="0" src="//siegel.exali.de/siegel/siegel_de-0_b930781cab0edd3ebdde659bd6ad0b49.png"
          height="120" alt="Lars Natus IT-Haftpflicht" />
        </a>
     </ExaliStyled>
    )
  }
  export default Exali