import React from 'react'
import styled from 'styled-components'
import BG from '../images/bg.jpg'

const PageStyled = styled.section`
  /* background-image: url(${BG});
  background-repeat: no-repeat;
  background-position: center top; */
`
function Page(props) {
    return (
     <PageStyled>
       {props.children}
     </PageStyled>
    )
  }
  export default Page