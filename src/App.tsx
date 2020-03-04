import CssBaseline from '@material-ui/core/CssBaseline'
import NoSsr from '@material-ui/core/NoSsr'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Layout from '~Components/layout'
import Router from './routes'
import theme from './theme'

const App = () => {
  return (
    <>
      <CssBaseline />
      <NoSsr>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <Layout>
                  <Router />
                </Layout>
              </BrowserRouter>
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </NoSsr>
    </>
  )
}

export default App
