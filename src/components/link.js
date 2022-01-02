import React from 'react'
import styled from 'styled-components'

const LinkStyled = styled.a`
    text-decoration: none;
    position: relative;
    display: inline-block;
    padding: 0 3px 5px;
    overflow: hidden;
    background-image: linear-gradient(-45deg, #11DBB4 0%, #11A8DB 35%, #612CB8 100%);
    background-size: 100% 4px;
    background-repeat: no-repeat;
    background-position-y: bottom;
`

function Link(props) {
    return (
     <LinkStyled href={props.href} target={props.target} rel="noreferrer">
         {props.children}
     </LinkStyled>
    )
  }
  export default Link