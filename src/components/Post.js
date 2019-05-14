import React from 'react'
import styled from 'styled-components'

const Post = props => {

  const PostCard = styled.div`
    margin: 1em;
    font-size: calc(12px + .5vh);
    border-bottom: solid lightgrey 1px;
    :hover h1 {
      color: gold;
    }

  `
  const { title, body } = props

  return (
    <PostCard>
      <h1>{ title }</h1>
      <h3>{ body }</h3>
    </PostCard>
  )
}

export default Post