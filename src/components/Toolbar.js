import React from 'react'
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Toolbar = () => {
  
  const ToolBarWrapper = styled.div`
    border-radius: 10px;
    background-color: gold;
    margin: 1em;
    text-align: center;
    padding: 1.5em;
    .info {
      font-size: calc(1rem + .5vw);
      font-weight: 600;
    }
    @media screen and (min-width: 768px) {
      top: 10em;
      position:sticky;
      margin: 5em;
      height: 30vw;
      width: 30%;
    
    }
    
  `

  return (
    <ToolBarWrapper>
      <div className="info" >
        <p><a href="https://pcmasterrace.org/">PC Master Race</a> is a community where we discuss and share our enthusiasm for the ultimate gaming and computing medium: the Personal Computer. </p>
      </div>
    </ToolBarWrapper>
  )
}

export default Toolbar