import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = props => {

  const PostCard = styled.div`
    margin: 1em;
    font-size: calc(12px + .5vh);
    border-bottom: solid lightgrey 1px;
    transition: all .1s ease-in-out;
    .footer {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: space-around;
      svg {
        cursor: pointer;
      }
    }
    :hover {
      background-image: radial-gradient(white, whitesmoke);
    }
    .unfav  {
      color: grey;
    }
    .fav  {
      color: gold;
    }

  `
  const { toggleFavorite, data, favorites } = props


  useEffect(() => {
    // component did update
    
  } )


  
  return (
    <PostCard>
      <h3>{ data.title }</h3>
      <p>{ data.body }</p>
      <div className="footer">
        <p>By: Author </p>
        <FontAwesomeIcon  
          className={ favorites.find(fav => fav.id === data.id) ? 'fav' : 'unfav' } icon='heart' 
          size='2x' 
          onClick={ () => 
            toggleFavorite(data)
          }
        />
      </div>
    </PostCard>
  )
}

export default React.memo(Post)