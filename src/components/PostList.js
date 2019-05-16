import React from 'react'
import Post from './../components/Post'

// maps Posts into Post Component 
// renders when all posts have loaded 
export default function PostList(props) {
  const { posts, favorites, toggleFavorite } = props


  return posts.map( (post, index) => 
    <Post 
      key={ index }
      data={ post } 
      toggleFavorite={ toggleFavorite } 
      favorites={ favorites }
    />
  )
}

