import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { put, take, takeEvery} from "redux-saga/effects";



// ~~~~~~~~~~~~ REDUX SAGAS ~~~~~~~~~~~~~~~

function* rootSaga(){
    
    yield takeEvery("GET_GIFS", getGifsSaga);
    yield takeEvery("GET_FAVS", getFavsSaga);
    yield takeEvery("ADD_FAVORITE", addFavSaga);
    yield takeEvery("CHANGE_CAT", changeCatSaga);
    yield takeEvery("DELETE_FAVORITE", deleteFavSaga);
    yield takeEvery("GET_CATEGORY", getCategoriesSaga);
}

function* getGifsSaga(action){
    // GET request to '/api/search/:searchTerm'
    try {
        let response = yield axios({
            method: 'GET',
            url: `/api/search/${action.payload}`
        })
        console.log(response.data);
        yield put({type: 'SET_GIFLIST', payload: response.data});
    } catch(error){
        console.log('Error in getting gifs,', error);
    }
    
}

function* getFavsSaga(){
    try {
        // GET request to '/api/favorite'
        const response = yield axios.get('/api/favorite');
        // storing the response in the FavsReducers:
        // console.log(response.data[0].gif_obj.url)
        // console.log(JSON.parse(response.data.gif_obj));
        yield put({type: 'SET_FAV', payload: response.data});
    } catch (err) {
        console.log('Error getting favorite Gifs', err);
    }
}

// saga to get categories from database and store them in the reducer.
function* getCategoriesSaga() {
    try {
        // response from server at route /api/categeory
        const response = yield axios.get('/api/category');
        yield put({type: 'SET_CATEGORY', payload: response.data});
    } catch(err) {
        console.log('Error getting categories', err);
    }
}

function* addFavSaga(action){
    // POST request to '/api/favorite'
    let newFavorite = {
        gif_obj: action.payload
    }
    try {
        yield axios({
            method: 'POST',
            url: '/api/favorite',
            data: newFavorite
        })
        yield put({type:'GET_FAVS'});
    } catch(err) {
        console.log('Error getting categories', err);
    }

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
    if(action.type === 'SET_GIFLIST'){
        return action.payload;
    }
    return state;
    
}

const favsReducer = (state=[], action) => {
    if(action.type === 'SET_FAV') {
        console.log('in setFav payload is', action.payload);
        return action.payload;
    }
    return state;
}

const categoryReducer = (state = [], action) => {
    if(action.type === 'SET_CATEGORY') {
        return action.payload;
    }
    return state;
}


// ~~~~~~~~~ REDUX STORE ~~~~~~~~~~~

const storeInstance = createStore(
    combineReducers({
        search: searchReducer,
        favs: favsReducer,
        categories: categoryReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
)

// Pass rootSaga into sagaMiddleware
sagaMiddleware.run(rootSaga);





ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
