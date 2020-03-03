import {
  AppBar,
  fade,
  Grid,
  InputBase,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const SearchBar = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  background-color: ${({ theme }) => fade(theme.palette.common.white, 0.15)};
  &:hover {
    background-color: ${({ theme }) => fade(theme.palette.common.white, 0.25)};
  }
  margin-left: 0;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: ${({ theme }) => theme.spacing(1)};
    width: auto;
  }
`

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Grid container>
        <Grid item xs>
          <Typography variant="h6">The Rick and Morty App</Typography>
        </Grid>
        <SearchBar>
          <InputBase
            startAdornment={<Search />}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchBar>
      </Grid>
    </Toolbar>
  </AppBar>
)

export default Header
