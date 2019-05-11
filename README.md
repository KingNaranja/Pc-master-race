# PC MASTER RACE 
## Computer Enthusiast's Hub 

PCMR is a web app built with React that keeps you up to date on everything PCMR. 

## Motivation
 PCMR is a an awesome community where PC enthusiasts can discuss and share content about anything related to Personal Computers. I visit [*r/pcmasterrace*](https://www.reddit.com/r/pcmasterrace/) several times a day and this web app will also serve as a guide for anyone who wishes to join the community.

## Development 
Understanding how data flows through components has been the most interesting part of learning React, however if I learned anything from [FaceBird](https://github.com/KingNaranja/FaceBird-2), it's that things can get *messy*.

### Context
The Context API provides a way to pass data through the component tree without having to manually pass them down at each level.
While this can't replace how useful *Redux* and Redux middleware is, currently *you don’t really need to install any external library for state management*. 

This app uses the `useState`, `useEffect` and `useReducer` React Hooks for some cool global state management. 

### Redux Philosophy 
According to the documentation Redux can be described in three fundamental principles,  ***stores, actions, and reducers.***

1. Actions are the only thing that should triggur a state change.
2. A reducer specifies what a part of the store will be affected by the action. *(switch statements)*
3. The store holds all the application data in an object tree.

[Imgur](https://i.imgur.com/YkBneOF.jpg)


## Technology
* React ( JSX )
* Styled Components -> Separates JSX layout from logic

This app was created with `create-react-app`

## Local Setup
Install dependencies with `npm install`

Run the development server with `npm start`
