import React from 'react'

interface LazyCharacterListProps {
  characterToSearch?: string | unknown
}
const LazyCharacterList = ({ characterToSearch }: LazyCharacterListProps) => {
  return <h1>{characterToSearch as string}</h1>
}

export default LazyCharacterList
