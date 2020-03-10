import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApiResponse, get } from '~Api'

interface GetCharactersArgs {
  type: string
  payload: {}
}
function* getCharacters({ payload = {} }: GetCharactersArgs) {
  try {
    const { data }: ApiResponse<'character', {}> = yield call(
      get,
      'character',
      payload
    )
    yield put({
      type: 'CHARACTERS_FETCH_SUCCEEDED',
      payload: { ...data, loading: false },
    })
  } catch (e) {
    yield put({ type: 'CHARACTERS_FETCH_FAILED', message: e.message })
  }
}

interface GetSingleCharacterArgs {
  type: string
  payload: string | number
}
function* getCharacterById({ payload }: GetSingleCharacterArgs) {
  try {
    const { data }: ApiResponse<'character', typeof payload> = yield call(
      get,
      'character',
      payload
    )
    yield put({
      type: 'CHARACTER_BY_ID_FETCH_SUCCEEDED',
      payload: { ...data, loading: false },
    })
  } catch (e) {
    yield put({ type: 'CHARACTER_BY_ID_FETCH_FAILED', message: e.message })
  }
}

interface GetMultipleCharacterArgs {
  type: string
  payload: string[] | number[]
}
function* getMultipleCharacterById({ payload }: GetMultipleCharacterArgs) {
  try {
    const { data }: ApiResponse<'character', typeof payload> = yield call(
      get,
      'character',
      payload
    )
    yield put({
      type: 'MULTIPLE_CHARACTER_BY_ID_FETCH_SUCCEEDED',
      payload: { ...data, loading: false },
    })
  } catch (e) {
    yield put({
      type: 'MULTIPLE_CHARACTER_BY_ID_FETCH_FAILED',
      message: e.message,
    })
  }
}

function* charactersSaga() {
  yield all([
    takeLatest('CHARACTERS_FETCH_REQUESTED', getCharacters),
    takeLatest('CHARACTER_BY_ID_FETCH_REQUESTED', getCharacterById),
    takeLatest(
      'MULTIPLE_CHARACTER_BY_ID_FETCH_REQUESTED',
      getMultipleCharacterById
    ),
  ])
}

export default charactersSaga
