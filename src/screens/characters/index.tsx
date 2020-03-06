import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { ReactComponent as Title } from '~Assets/img/characters_title.svg'
import useDebounce from '~Hooks/useDebounce'
import CharacterComparator from './components/CharacterComparator'
import LazyCharacterList from './components/LazyCharacterList'
import SearchBar from './components/SearchBar'

const Characters = () => {
  const [searchValue, setsearchValue] = useState()
  const debouncedSearchValue = useDebounce(searchValue, 500)

  const handleSearch = (value: string) => setsearchValue(value)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <SearchBar element={searchValue} handleChange={handleSearch} />
      </Grid>
      <Grid item xs={12}>
        <CharacterComparator />
      </Grid>
      <Grid item xs={12}>
        <LazyCharacterList characterToSearch={debouncedSearchValue} />
      </Grid>
    </Grid>
  )
}

export default Characters
