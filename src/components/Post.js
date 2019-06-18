import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown, Button, Icon } from 'rbx'

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
      background-color: inherit; 
      svg {
        margin: 0 .5em;
        cursor: pointer;
      }

    }
    :hover {
      /* background-image: radial-gradient(white, whitesmoke); */
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
    .title {
      text-decoration: none;
      color: #000000;
      &:hover {
        color: #DCAF5B;
      }
    }
  `
  const { toggleFavorite, data, favorites } = props
  
  return (
    <PostCard>
      <div>
        <h3><a className='title' href={`https://www.reddit.com${data.link}`}>{data.title}</a></h3>
        <div className="footer">
          <Dropdown  className='drop' hoverable>
            <Dropdown.Trigger>
              <Button>
                <Icon size="smal">
                  <FontAwesomeIcon icon='ellipsis-h' size='sm' />
                </Icon>
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.Content
                onClick={ () => 
                  toggleFavorite(data)
                }>
                <Dropdown.Item>
                  { favorites.find(fav => fav.id === data.id) ? 'Remove from Favorites' :'Add to Favorites' }</Dropdown.Item>
                <Dropdown.Item>Comments</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Menu>
          </Dropdown>
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