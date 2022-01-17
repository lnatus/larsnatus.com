import React from 'react'
import styled from 'styled-components'

const MainStyled = styled.div`
    text-align: center;
    padding: 0 2em;
    p {
        margin: 0 0 10px 0;
    }
    
    img {
        max-width: 100%;
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