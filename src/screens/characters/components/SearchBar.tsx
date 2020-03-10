import { fade, Grid, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled(Grid)`
  margin-top: 15px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  height: 50px;
  background-color: ${({ theme }) => fade(theme.palette.common.white, 0.25)};
  &:hover {
    background-color: ${({ theme }) => fade(theme.palette.common.white, 0.5)};
  }
`

interface SearchBarProps {
  element: string
  handleChange: (value: string) => void
}
const SearchBar = ({ element, handleChange }: SearchBarProps) => {
  return (
    <SearchContainer container justify="space-around" alignItems="center">
      <Grid container item xs={1} direction="column" alignItems="center">
        <SearchIcon />
      </Grid>
      <Grid item xs={11}>
        <InputBase
          fullWidth
          placeholder="Search a character"
          value={element}
          onChange={e => handleChange(e.target.value)}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Grid>
    </SearchContainer>
  )
}

export default SearchBar
