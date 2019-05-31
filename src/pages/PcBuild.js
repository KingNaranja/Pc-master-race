import React from 'react'
import styled from 'styled-components'
import PostContainer from "./../components/PostContainer"
import Toolbar from "./../components/Toolbar";
import { PageWrapper } from './../components/PageWrapper'


function PcBuild() {
  // inherit style from Wrapper 
  const Wrapper = styled(PageWrapper)``

  const page = 'build-pc'

  return (
    <Wrapper>
      <Toolbar/>
      <PostContainer page={page} />
    </Wrapper>
  )
}

export default PcBuild
