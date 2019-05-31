import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = props => {

  const PostCard = styled.div`
    display: flex;
    justify-content: space-between;
    margin: .2em;
    font-size: calc(9px + .5vw);
    border-bottom: solid lightgrey 1px;
    transition: all .1s ease-in-out;
    .footer {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: flex-start; 
      svg {
        margin: 0 .5em;
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
    .thumbnail {
      max-width: 20%;
      max-height: 10vh;

    }
    @media only screen and (min-width: 768px) {
      .thumbnail {
        max-height: 240px;
      }
    }

  `
  const { toggleFavorite, data, favorites } = props
  
  return (
    <PostCard>
      <div className="main">
        <h3><a href={`https://www.reddit.com${data.link}`}>{data.title}</a></h3>
        <div className="footer">
          <FontAwesomeIcon  
            className={ favorites.find(fav => fav.id === data.id) ? 'fav' : 'unfav' } icon='heart' 
            size='2x' 
            onClick={ () => 
              toggleFavorite(data)
            }
          />
        </div>
      </div>
      {
        (/\.(gif|jpg|jpeg|tiff|png)$/i).test(data.img) ?
          <img className='thumbnail' src={data.img} alt="thumbnail"/> :
          null
      }
    </PostCard>
  )
}

export default React.memo(Post)