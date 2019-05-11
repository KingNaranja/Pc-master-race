# PC MASTER RACE 
## The Computer Enthusiast's Hub 

PCMR is web app built with React. 

# Development 
Understanding how data flows through components has been the most interesting part of learning React, however if I learned anything from [FaceBird](https://github.com/KingNaranja/FaceBird-2), it's that things can get *messy*.

### Context
The Context API provides a way to pass data through the component tree without having to manually pass them down at each level.
While this can't replace how useful *Redux* and Redux middleware is, currently *you don’t really need to install any external library for state management*. 

This app uses the `useState`, `useEffect` and `useReducer` React hooks for some cool global state management. 

### Redux Philosophy 
According to the documentation Redux can be described in three fundamental principles,  ***stores, actions, and reducers.***

1. Actions are the only thing that should triggur a state change.
2. A reducer specifies what a part of the store will be affected by the action. *(switch statements)*
3. The store holds all the application data in an object tree.

[Imgur](https://i.imgur.com/YkBneOF.jpg)


### Technology
* React ( JSX )
* Styled Components -> Separates JSX layout from logic

This app was created with `create-react-app`

### Local Setup
Install dependencies with `npm install`
Run the development server with `npm start`

 



