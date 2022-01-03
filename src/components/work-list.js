import React from 'react'
import styled from 'styled-components'

import WorkItem from './work-item'

const WorkListStyled = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
`
function WorkList(props) {
    return (
     <WorkListStyled>
         <WorkItem
            title="Konzeption und Entwicklung einer Corporate Intranet Platform auf Basis von Microsoft 365"
            industry="Energieversorger"
            employee="700"
            duration="6 Monate"
            doings="Technische Beratung, Entwicklung und Projektmanagement">
          </WorkItem>
          <WorkItem
            title="Information Security Beratung und Implementierung zur TISAX® Zertifizierung"
            industry="IT"
            employee="10"
            duration="1 Jahr"
            doings="Aufbau ISMS, Interne Auditierung, Information Security Officer">
          </WorkItem>
          <WorkItem
            title="Projektmanagement: Custom Application Development"
            industry="Automotive"
            employee="36000"
            duration="1 Jahr"
            doings="Agiles Projektmanagement (SCRUM)">
          </WorkItem>
          <WorkItem
            title="Technische Beratung & Entwicklung einer Corporate Intranet Platform auf Basis von SharePoint 2013 "
            industry="Electronics"
            employee="7000"
            duration="3 Jahre"
            doings="Technische Beratung, Entwicklung und Designkonzeption">
          </WorkItem>
     </WorkListStyled>
    )
  }
  export default WorkList