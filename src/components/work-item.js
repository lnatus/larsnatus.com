import React from 'react'
import styled from 'styled-components'

const WorkItemStyled = styled.li`
   width: 100%;
   text-align: center;
   div {
        margin: 40px 0;
        background-image: linear-gradient(-45deg, #11DBB4 0%, #11A8DB 35%, #612CB8 100%);
        width: 100%;
        height: 4px;
   }
`
function WorkItem(props) {
    return (
     <WorkItemStyled>
        <h5>{props.title}</h5>
        <p><b>Industrie:</b> {props.industry}</p>
        <p><b>Mitarbeiteranzahl:</b> {props.employee}</p>
        <p><b>Projektdauer:</b> {props.duration}</p>
        <p><b>Tätigkeiten:</b> {props.doings}</p>
        <div></div>
     </WorkItemStyled>
    )
  }
  export default WorkItem