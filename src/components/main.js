import React from 'react'
import styled from 'styled-components'

const MainStyled = styled.div`
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

function Main(props) {
    return (
        <MainStyled>
            {props.children}
        </MainStyled>
    )
  }
  export default Main