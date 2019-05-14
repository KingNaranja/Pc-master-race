import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import loading from './../images/loading.svg'
import Post from './Post'
import { useStateValue } from './../context/GlobalState'

function PostContainer() {
   
  const Container = styled.div`
    margin: 1em;
    border: solid #000000;
    border-radius: 1vh;
    overflow-y: scroll;
    min-width: 40vw;
    height: 100%;
    .load {
      justify-self: center;
      align-self: center;
      /* margin: 1em; */
      padding: 10vh;
    }
    @media screen and (min-width: 768px) {
      max-width: 70vw;
      .load { padding: 50vh; }
    }


  `
  const [ isLoading, setIsLoading ] = useState(true)
  const [ state, dispatch ] = useStateValue()
  console.log(state)

  useEffect( () => {
    console.log('component did mount')
    console.log('fetching posts')
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then( response => response.json() )
      .then( posts => {
        // dispatch an action
        dispatch({
          type: 'addPosts', 
          payload: posts
        })
        // load posts 
        console.log('posts have loaded')
        setIsLoading(false)
        
      })
    
  }, [dispatch])

  useEffect( () => {
    console.log('component did update')

  } )


  return (
    <Container >
      {
        isLoading && state ? 
        <img  className='load' src={loading} alt="Loading..."/> :
        state.posts.map( (post, index) => 
          <Post key={index} title={post.title} body={post.body} />
        )
      }
    </Container>
  )
}

export default PostContainer
