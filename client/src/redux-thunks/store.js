import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import grillaReducer from './grillaDuck';
import thunk from 'redux-thunk';
import getGrillaAction from './grillaDuck';

let rootReducer = combineReducers({
    grilla: grillaReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk)) 
    )
    // getGrillaAction()(store.dispatch, store.getState);

    return store
}