import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  /* background-color: ${({ theme }) => theme.palette.primary.light}; */
  margin-top: 10px;
  min-height: 140px;
`

const Sidebar = () => {
  return (
    <>
      <h1>Sidebar</h1>
      <h3>Rick & Morty random elements</h3>
      <StyledCard>
        <CardMedia
          style={{ height: 140 }}
          image="https://cdn.themedizine.com/2020/01/cuarta_temporada_rick_morty-1000x489.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Data here
          </Typography>
        </CardContent>
      </StyledCard>
    </>
  )
}

export default Sidebar
