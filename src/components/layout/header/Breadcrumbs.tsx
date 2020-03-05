import {
  Breadcrumbs as MaterialUiBreadcrumbs,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Link as RouterLink, Route } from 'react-router-dom'
import routes, { RouteType } from '~Routes/routes'

const Breadcrumbs = () => {
  return (
    <Route>
      {({ location }) => {
        const pathNames = location.pathname.split('/').filter(x => x)
        return (
          <MaterialUiBreadcrumbs aria-label="breadcrumb">
            <RouterLink color="inherit" to={routes.baseUrl.path}>
              {routes.baseUrl.name}
            </RouterLink>
            {pathNames.map((value, index) => {
              const last = index === pathNames.length - 1
              const to = `/${pathNames.slice(0, index + 1).join('/')}`

              const { name } = Object.values(routes).filter(
                (route: RouteType) => route.path.substring(1) === value
              )[0]

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {name}
                </Typography>
              ) : (
                <RouterLink color="inherit" to={to} key={to}>
                  {name}
                </RouterLink>
              )
            })}
          </MaterialUiBreadcrumbs>
        )
      }}
    </Route>
  )
}

export default Breadcrumbs
