import postReducer from './postReducer'
import favoriteReducer from './favoriteReducer'

// mainReducer runs everytime dispatch() is called   
const mainReducer = ( { posts, favorites }, action ) => {

  return {
    posts: postReducer(posts, action), 
    favorites: favoriteReducer(favorites, action)
  }
}

export default mainReducer