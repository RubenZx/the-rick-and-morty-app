import React from 'react'
import { fade, InputBase } from '@material-ui/core'
import styled from 'styled-components'
import { Search as SearchIcon } from '@material-ui/icons'

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

const Search = () => {
  return (
    <>
      <SearchBar>
        <InputBase
          startAdornment={<SearchIcon />}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </SearchBar>
    </>
  )
}

export default Search
