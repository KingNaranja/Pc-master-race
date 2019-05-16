import React, { useEffect, useState, lazy, Suspense } from 'react'
import styled from 'styled-components'
import { useStateValue } from './../context/GlobalState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// wait for PostList to load before rendering
const PostList = lazy( () => import('./PostList'))

function PostContainer() {
   
  const Container = styled.div`
    margin: 1em;
    border: solid #000000;
    border-radius: 1vh;
    overflow-y: scroll;
    min-width: 40vw;
    height: 100%;
    /* padding: 10vh; */
    .load {
      justify-self: center;
      align-self: center;
      margin: 1em;
      padding: 10vh;
    }
    @media screen and (min-width: 768px) {
      width: 70vw;
      .load { 
        height: 100%;
        padding: 20vw; 
      }
    }


  `
  const [ isLoading, setIsLoading ] = useState(true)
  const [ state, dispatch ] = useStateValue()

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

  

  const toggleFavorite = post => {
    // check if post exists in favorites array
    // store result as boolean
    const postInFavorites = state.favorites.includes(post)

    // dispatch add new favorite action
    let actionObj = {
      type: 'addFav',
      payload: post
    }
    if ( postInFavorites ) {
      console.log('remove fav')
      // remove unfavorited post from array
      const favoritesWithoutPost = state.favorites.filter( fav => fav.id !== post.id )
      // dispatch updated favorites
      actionObj = {
        type: 'removeFav',
        payload: favoritesWithoutPost
      }
    }
    console.log(postInFavorites)
    dispatch( actionObj )
    
  }

  const loading = <FontAwesomeIcon className='load' icon='spinner' spin size='4x' />

  return (
    <Container >
      <Suspense fallback={ loading } >
          <PostList 
            toggleFavorite={ toggleFavorite }
            posts={ state.posts } 
            favorites={ state.favorites }
          />
      </Suspense>
    </Container>
    
  )
}

export default PostContainer
