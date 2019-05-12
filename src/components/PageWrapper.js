import styled from 'styled-components'
// PageWrapper is used to give all front pages responsive design.
// It returns a styled component.

export const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: 25% 75%;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  justify-items: stretch;
  align-items: stretch; 

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-content: space-between;
    justify-content: space-between;
  
  }
  

`