export const fetchCharacters = (value: any) => {
  return {
    type: 'CHARACTERS_FETCH_REQUESTED',
    payload: value
  }
}
