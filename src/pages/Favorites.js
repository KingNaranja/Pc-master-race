import React, { useRef } from 'react'
import styled from 'styled-components'
import PostContainer from "./../components/PostContainer"
import Toolbar from "./../components/Toolbar";
import { PageWrapper } from './../components/PageWrapper'

 const Favorites = props => {

  const Wrapper = styled(PageWrapper)``
  console.log('Favorites Page has loaded')
  console.log(props)
  
  const favPage = useRef(true)

  
  return (
    <Wrapper>
      <Toolbar/>
      <PostContainer favPage={favPage} />
    </Wrapper>
  )
}

export default Favorites