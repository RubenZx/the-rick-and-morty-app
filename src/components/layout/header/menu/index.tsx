import { AppBar, Grid, Toolbar } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Search from '~Components/layout/header/menu/Search'
import Section from '~Components/layout/header/menu/Section'
import routes from '~Routes/routes'

const Menu = () => {
  const location = useLocation()
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={2}>
            <Section
              href={routes.baseUrl}
              path={location.pathname}
              variant="h5"
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <Section
              href={routes.characters}
              path={location.pathname}
              variant="h6"
            />
          </Grid>
          <Grid item xs={2}>
            <Section
              href={routes.episodes}
              path={location.pathname}
              variant="h6"
            />
          </Grid>
          <Grid item xs={2}>
            <Section
              href={routes.locations}
              path={location.pathname}
              variant="h6"
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <Search />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
