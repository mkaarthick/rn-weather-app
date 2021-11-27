import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSagas from '../sagas/index-sagas';
import weatherReducer from './WeatherState';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  weather: weatherReducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({thunk: false}),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSagas);
export default store;
