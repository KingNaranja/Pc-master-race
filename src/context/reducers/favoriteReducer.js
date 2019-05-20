// manage favorites state
// combines into mainReducer 
const favoriteReducer = ( state, action ) => {
  switch (action.type) {
    case 'addFav':
      return  [...state, action.payload] 
    case 'removeFav':
      return action.payload 
      
    default: // invalid action
     return state
  }
}

export default favoriteReducer