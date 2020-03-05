import React from 'react'
import {
  Breadcrumbs as MaterialUiBreadcrumbs,
  Typography
} from '@material-ui/core'
import { Link as RouterLink, Route } from 'react-router-dom'
import routes from '~Routes/routes'

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

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {value}
                </Typography>
              ) : (
                <RouterLink color="inherit" to={to} key={to}>
                  {value}
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
