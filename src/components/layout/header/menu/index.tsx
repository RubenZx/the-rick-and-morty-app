import { AppBar, Grid, Toolbar } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Search from '~Components/layout/header/menu/Search'
import Section from '~Components/layout/header/menu/Section'
import Logo from '~Components/Logo'
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
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs>
            <Section
              to={routes.characters}
              path={location.pathname}
              text="Characters"
              variant="h6"
            />
          </Grid>
          <Grid item xs>
            <Section
              to={routes.episodes}
              path={location.pathname}
              text="Episodes"
              variant="h6"
            />
          </Grid>
          <Grid item xs>
            <Section
              to={routes.locations}
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
