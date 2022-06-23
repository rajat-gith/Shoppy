import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducers,productDetailReducers } from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  productList:productListReducers,
  productDetails:productDetailReducers,
  cart:cartReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  cart:{cartItems:cartItemsFromStorage}
};

const persistedReducer = persistReducer(persistConfig, reducer)


const middleware = [thunk];
const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor=persistStore(store)
export default store
