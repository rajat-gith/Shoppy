import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducers,productDetailReducers } from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { userLoginReducers} from './reducers/userReducers';
import {userRegisterReducers,userDetailsReducers,userUpdateProfileReducers} from './reducers/userReducers'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  productList:productListReducers,
  productDetails:productDetailReducers,
  cart:cartReducer,
  userLogin:userLoginReducers,
  userRegister:userRegisterReducers,
  userDetails:userDetailsReducers,
  userUpdateProfile:userUpdateProfileReducers,
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
  JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null


const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
  JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
  cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const persistedReducer = persistReducer(persistConfig, reducer)


const middleware = [thunk];
const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor=persistStore(store)
export default store
