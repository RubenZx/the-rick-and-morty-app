import { GridList, GridListTile } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { Character, CharacterInfo } from '../../../services/api/types'
import { RootState } from '~Store/reducers'
import { getCharacterResults } from '~Store/reducers/characters'

const Container = styled.div`
  margin-bottom: 50px;
`

const StyledGridList = styled(GridList)`
  justify-content: space-around;
`

const StyledGridListTile = styled(GridListTile)`
  margin-top: 10px;
`

const LazyList = () => {
  const characterState = useSelector(
    (state: RootState) => state.characterState
  )

  const [hasMoreCharactersToLoad, setHasMoreCharactersToLoad] = useState(true)
  const [characters, setCharacters] = useState(characterState.results)

  const loadMoreCharacters = () => {
    setHasMoreCharactersToLoad(false)
  }

  const Items =
    getCharacterResults(characterState).results &&
    getCharacterResults(characterState).results.map((character: Character) => (
      <StyledGridListTile
        key={character.id}
        cols={1}
        rows={1}
        style={{ width: 200 }}
      >
        <Card character={character} />
      </StyledGridListTile>
    ))

  return (
    <Container>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMoreCharacters}
        hasMore={hasMoreCharactersToLoad}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <StyledGridList cellHeight="auto" spacing={4}>
          {Items}
        </StyledGridList>
      </InfiniteScroll>
    </Container>
  )
}

export default LazyList
