import React, { createContext, useContext, useReducer } from 'react'

// returns a context Provider and Consumer
const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => (
  // Pass the result of useReducer as 
  // a value to the StateContext Provider.
  <StateContext.Provider value={ useReducer(reducer, initialState) }>
    { children }
  </StateContext.Provider>
)

// Custom hook for accessing state
// Returns the same value from the context Provider => [ state, dispatch ]
export const useStateValue = () => useContext(StateContext)
