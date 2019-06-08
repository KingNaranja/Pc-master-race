import React from 'react'
import styled from 'styled-components'
import PostContainer from "./../components/PostContainer"
import Toolbar from "./../components/Toolbar";
import { PageWrapper } from './../components/PageWrapper'

 const Favorites = props => {

  const Wrapper = styled(PageWrapper)``
  
  return (
    <Wrapper>
      <Toolbar/>
      <PostContainer fav />
    </Wrapper>
  )
}

export default Favorites