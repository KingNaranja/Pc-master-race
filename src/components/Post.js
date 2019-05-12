import React from 'react'
import styled from 'styled-components'

export default function Post() {

  const PostCard = styled.div`
    margin: 1em;
    font-size: calc(12px + .5vh);
  `

  return (
    <PostCard className="test" >
      <h1>Pokemon Crystal is the greatest pokemon game of all time</h1>
      <h3>Change my mind.</h3>
      <p>by KingNaranja</p>
    </PostCard>
  )
}
