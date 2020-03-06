import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { ReactComponent as Title } from '~Assets/img/characters_title.svg'
import CharacterComparator from './components/CharacterComparator'
import LazyCharacterList from './components/LazyCharacterList'
import SearchBar from './components/SearchBar'

const Characters = () => {
  const [search, setSearch] = useState()
  const handleSearch = (value: string) => setSearch(value)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <SearchBar element="search" handleChange={handleSearch} />
      </Grid>
      <Grid item xs={12}>
        <CharacterComparator />
      </Grid>
      <Grid item xs={12}>
        <LazyCharacterList />
      </Grid>
    </Grid>
  )
}

export default Characters
