const initialState = {
  characters: {
    loading: true,
    results: undefined,
    errors: undefined,
  },
  episodes: {
    loading: true,
    results: undefined,
    errors: undefined,
  },
  locations: {
    loading: true,
    results: undefined,
    errors: undefined,
  },
}

interface ActionType {
  type: string
  payload: unknown
}

export const charactersReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'CHARACTERS_FETCH_REQUESTED':
      return { ...state, loading: true }
    case 'CHARACTERS_FETCH_SUCCEEDED':
      return { ...state, characters: action.payload }
    case 'CHARACTERS_FETCH_FAILED':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export const characterByIdReducer = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case 'CHARACTER_BY_ID_FETCH_REQUESTED':
      return { ...state, loading: true }
    case 'CHARACTER_BY_ID_FETCH_SUCCEEDED':
      return { ...state, characters: action.payload }
    case 'CHARACTER_BY_ID_FETCH_FAILED':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export const multipleCharacterByIdReducer = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case 'MULTIPLE_CHARACTER_BY_ID_FETCH_REQUESTED':
      return { ...state, loading: true }
    case 'MULTIPLE_CHARACTER_BY_ID_FETCH_SUCCEEDED':
      return { ...state, characters: action.payload }
    case 'MULTIPLE_CHARACTER_BY_ID_FETCH_FAILED':
      return { ...state, error: action.payload }
    default:
      return state
  }
}
