import { AppBar, Grid, Toolbar } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Search from '~Components/layout/header/menu/Search'
import Section from '~Components/layout/header/menu/Section'
import routes from '~Routes/routes'

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

const StyledToolbar = styled(Toolbar)`
  flex-grow: 1;
`

const Menu = () => {
  const location = useLocation()
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Grid container spacing={4}>
          <Grid item>
            <Section
              href={routes.baseUrl}
              path={location.pathname}
              text="The Rick and Morty App"
              variant="h5"
            />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs>
            <Section
              href={routes.characters}
              path={location.pathname}
              text="Characters"
              variant="h6"
            />
          </Grid>
          <Grid item xs>
            <Section
              href={routes.episodes}
              path={location.pathname}
              text="Episodes"
              variant="h6"
            />
          </Grid>
          <Grid item xs>
            <Section
              href={routes.locations}
              path={location.pathname}
              text="Locations"
              variant="h6"
            />
          </Grid>
          <Grid item xs={2}>
            <Search />
          </Grid>
        </Grid>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Menu
