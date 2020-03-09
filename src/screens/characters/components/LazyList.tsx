import { GridList, GridListTile } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { Character, Origin, RelatedLocation } from '../../../services/api/types'

interface LazyCharacterListProps {
  characterToSearch?: string | unknown
}
const LazyList = ({ characterToSearch }: LazyCharacterListProps) => {
  const originData: Origin = {
    name: 'string',
    url: 'string',
  }

  const relatedLocationData: RelatedLocation = {
    name: 'string',
    url: 'string',
  }

  const characterData1: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      // ...
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  }

  const characterData2 = {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      // ...
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z',
  }

  const characterData183 = {
    id: 183,
    name: 'Johnny Depp',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-500A)',
      url: 'https://rickandmortyapi.com/api/location/23',
    },
    location: {
      name: 'Earth (C-500A)',
      url: 'https://rickandmortyapi.com/api/location/23',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'https://rickandmortyapi.com/api/character/183',
    created: '2017-12-29T18:51:29.693Z',
  }

  const characterData361 = {
    id: 361,
    name: 'Toxic Rick',
    status: 'Dead',
    species: 'Humanoid',
    type: "Rick's Toxic Side",
    gender: 'Male',
    origin: {
      name: 'Alien Spa',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/361',
    created: '2018-01-10T18:20:41.703Z',
  }

  const characters = []
  characters.push(characterData1)
  characters.push(characterData2)
  characters.push(characterData183)
  characters.push(characterData361)

  const Container = styled.div`
    margin-bottom: 50px;
  `

  const StyledGridList = styled(GridList)`
    justify-content: space-around;
  `

  const StyledGridListTile = styled(GridListTile)`
    margin-top: 10px;
  `

  return (
    <Container>
      <StyledGridList cellHeight="auto" spacing={4}>
        {characters.map(character => (
          <StyledGridListTile
            key={character.id}
            cols={1}
            rows={1}
            style={{ width: 200 }}
          >
            <Card character={character} />
          </StyledGridListTile>
        ))}
      </StyledGridList>
    </Container>
  )
}

export default LazyList
