import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery} from "redux-saga/effects";
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga';






// ~~~~~~~~~~~~ REDUX SAGAS ~~~~~~~~~~~~~~~

function* rootSaga(){
    
    yield takeEvery("GET_GIFS", getGifsSaga);
    yield takeEvery("GET_FAVS", getFavsSaga);
    yield takeEvery("ADD_FAVORITE", addFavSaga);
    yield takeEvery("CHANGE_CAT", changeCatSaga);
    yield takeEvery("DELETE_FAVORITE", deleteFavSaga);
}

function* getGifsSaga(){
    // GET request to '/api/search'
}

function* getFavsSaga(){
    // GET request to '/api/favorite'
}


function* addFavSaga(){
    // POST request to '/api/favorite'

}

function* changeCatSaga(){
    // PUT request to '/api/favorite/:favid

}

function* deleteFavSaga(){
    // DELETE request to '/api/favorite

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();



// ~~~~~~~~~~~~~ REDUX REDUCERS ~~~~~~~~~~

const searchReducer = (state=[], action) => {
    return state;
}

const favsReducer = (state=[], action) => {
    if(action.type === 'SET_FAV') {
        return action.payload;
    }
    return state;
}




// ~~~~~~~~~ REDUX STORE ~~~~~~~~~~~

const storeInstance = createStore(
    combineReducers({
        search: searchReducer,
        favs: favsReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
)

// Pass rootSaga into sagaMiddleware
sagaMiddleware.run(rootSaga);





ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
