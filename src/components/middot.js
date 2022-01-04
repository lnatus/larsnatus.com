import React from 'react'
import styled from 'styled-components'

const MiddotStyled = styled.span`
    @media (max-width: 480px) {
        display: none;
    }
`

function Middot(props) {
    return (
        <MiddotStyled>
            &middot; {" "}
        </MiddotStyled>
    )
  }
  export default Middot