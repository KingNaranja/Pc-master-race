import { useEffect, useState } from 'react'
import { useStateValue } from './../context/GlobalState'

export const useHttp = url => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ state, dispatch ] = useStateValue()

  useEffect( () => {
    console.log('fetching posts')
    setIsLoading(true)
    fetch( url )
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
      // only re-run if dispatch object changes 
  }, [dispatch])

  return [ isLoading, state.posts ] 
}