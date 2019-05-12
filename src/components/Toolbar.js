import React from 'react'
import styled from 'styled-components'


export default function Toolbar() {
  
  const ToolBarWrapper = styled.div`
  /* width: 100%; */
  border-radius: 10px;
  background-color: gray;
  margin: 1em;
  .test {
    height: 50%;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
  `

  return (
    <ToolBarWrapper>
      <div className="info test" >ToolBar Info</div>
      <div className="links test">Toolbar Social Links</div>
    </ToolBarWrapper>
  )
}
