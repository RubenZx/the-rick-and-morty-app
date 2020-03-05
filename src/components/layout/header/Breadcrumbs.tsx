import {
  Breadcrumbs as MaterialUiBreadcrumbs,
  Link,
  Typography,
} from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import React from 'react'
import { Link as RouterLink, Route } from 'react-router-dom'
import routes, { RouteType } from '~Routes/routes'

const Breadcrumbs = () => {
  return (
    <Route>
      {({ location }) => {
        const pathNames = location.pathname.split('/').filter(x => x)
        return (
          <MaterialUiBreadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              color="inherit"
              component={RouterLink}
              to={routes.baseUrl.path}
            >
              {routes.baseUrl.name}
            </Link>
            {pathNames.map((value, index) => {
              const last = index === pathNames.length - 1
              const { name, path } = Object.values(routes).filter(
                (route: RouteType) => route.path === `/${value}`
              )[0]

              return last ? (
                <Typography color="textPrimary" key={path}>
                  {name}
                </Typography>
              ) : (
                <Link color="inherit" component={RouterLink} to={path}>
                  {name}
                </Link>
              )
            })}
          </MaterialUiBreadcrumbs>
        )
      }}
    </Route>
  )
}

export default Breadcrumbs
