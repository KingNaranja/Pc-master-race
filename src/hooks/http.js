import { useEffect, useState } from 'react'
import { useStateValue } from './../context/GlobalState'

export const useHttp = (page='pcmr') => {
  // const [ isLoading, setIsLoading ] = useState(false)
  const [ state, dispatch ] = useStateValue()

  useEffect( () => {
    console.log('fetching posts')
  
    // setIsLoading(true)
    fetch( `https://pcmr-api.herokuapp.com/${page}` )
      .then( response => response.json() )
      .then( posts => {
        // dispatch an action
        dispatch({
          type: 'addPosts', 
          payload: posts
        })
        // load posts 
        console.log('posts have loaded')
        // setIsLoading(false)
      }) 
  }, [ dispatch, page ])
  return [ state.favorites, state.posts ] 
}