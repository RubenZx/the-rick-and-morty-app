import { AppBar, Grid, Toolbar } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Search from '~Components/layout/header/menu/Search'
import Section from '~Components/layout/header/menu/Section'
import routes from '~Routes/routes'

const StyledAppBar = styled(AppBar)`
  background-color: #2e4052;
`

const Menu = () => {
  const location = useLocation()
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={2}>
            <Section
              href={routes.baseUrl}
              path={location.pathname}
              text="The Rick and Morty App"
              variant="h5"
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1}>
            <Section
              href={routes.characters}
              path={location.pathname}
              text="Characters"
              variant="h6"
            />
          </Grid>
          <Grid item xs={1}>
            <Section
              href={routes.episodes}
              path={location.pathname}
              text="Episodes"
              variant="h6"
            />
          </Grid>
          <Grid item xs={1}>
            <Section
              href={routes.locations}
              path={location.pathname}
              text="Locations"
              variant="h6"
            />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={2}>
            <Search />
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Menu
