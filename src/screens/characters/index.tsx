import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { ReactComponent as Title } from '~Assets/img/characters_title.svg'
import useDebounce from '~Hooks/useDebounce'
import Comparator from './components/Comparator'
import LazyList from './components/LazyList'
import SearchBar from './components/SearchBar'

const Characters = () => {
  const [searchValue, setSearchValue] = useState()
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const handleSearch = (value: string) => setSearchValue(value)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <SearchBar element={searchValue} handleChange={handleSearch} />
      </Grid>
      <Grid item xs={12}>
        <Comparator />
      </Grid>
      <Grid item xs={12}>
        <LazyList characterToSearch={debouncedSearchValue} />
      </Grid>
    </Grid>
  )
}

export default Characters
