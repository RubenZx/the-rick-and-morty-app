import React from 'react'

interface LazyCharacterListProps {
  characterToSearch?: string | unknown
}
const LazyList = ({ characterToSearch }: LazyCharacterListProps) => {
  return (
    <>
      Lazy List
    </>
  )
}

export default LazyList
