// manage posts state
// combines into mainReducer 
const postReducer = ( state, action ) => {
  switch (action.type) {
    case 'addPosts':
     return action.payload

    default: // invalid action
     return state
  }
}

export default postReducer