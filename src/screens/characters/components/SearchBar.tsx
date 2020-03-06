import { TextField } from '@material-ui/core'
import React from 'react'

interface SearchBarProps {
  element: string
  handleChange: (value: string) => void
}
const SearchBar = ({ element, handleChange }: SearchBarProps) => {
  return (
    <TextField value={element} onChange={e => handleChange(e.target.value)} />
  )
}

export default SearchBar
