import React from 'react'
import styled from 'styled-components'
import Post from './Post'

function PostContainer() {
   
  const Container = styled.div`
    margin: 1em;
    border: solid #000000;
    border-radius: 1vh;
    overflow-y: scroll;
    min-width: 40%;
    height: 100%;

  `

  return (
    <Container className='fetch-posts'>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      

    </Container>
  )
}

export default PostContainer
