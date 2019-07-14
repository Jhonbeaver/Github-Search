import Vue from 'vue';
import Vuex from 'vuex';
import createSagaPlugin from 'vuex-redux-saga';
import {
  put, call, takeLatest,
} from 'redux-saga/effects';
import api from './modules/api';


Vue.use(Vuex);
const sagaPlugin = createSagaPlugin();
export default new Vuex.Store({
  state: {
    repos: [],
    spinner: false,
  },
  mutations: {
    /**
     * Обновляем репозитории в Store
     * @param  {object} state
     * @param  {array} githubResults
     */
    update_respos(state, { githubResults }) {
      state.repos = [...githubResults];
    },
    /**
     * Обновляям состояние спиннера s Store
     * @param  {object} state
     * @param  {boolean} on
     */
    StartStopSpinner(state, { on }) {
      state.spinner = on;
    },
    GetNewRepos() {
    },
  },
  actions: {
  },
  plugins: [sagaPlugin],
});

/**
*
* Сага получающая данные о репозиториях и внедряющая их в Store
* @param {object} action
*
*/

function* GetReposSaga(action) {
  try {
    yield put({ type: 'StartStopSpinner', on: true });
    if (action.payload !== null && action.payload !== '') {
      const newData = yield call(api.GetRepos, action.payload);
      yield put({ type: 'update_respos', githubResults: newData });
    } else {
      yield put({ type: 'update_respos', githubResults: [] });
    }
    yield put({ type: 'StartStopSpinner', on: false });
  } catch (e) {
    console.error(e.message);
    yield put({ type: 'StartStopSpinner', on: false });
  }
}

/**
 *
 * Сага реагирующая на мутацию GetNewRepos и вызыващая сагу GetReposSaga
 *
*/


function* MainSaga() {
  yield takeLatest('GetNewRepos', GetReposSaga);
}

sagaPlugin.run(MainSaga);
