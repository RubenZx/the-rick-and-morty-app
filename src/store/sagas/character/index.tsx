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
      payload: data,
    })
  } catch (e) {
    yield put({ type: 'CHARACTERS_FETCH_FAILED', message: e.message })
  }
}

function* charactersSaga() {
  yield all([takeLatest('CHARACTERS_FETCH_REQUESTED', getCharacters)])
}

export default charactersSaga
