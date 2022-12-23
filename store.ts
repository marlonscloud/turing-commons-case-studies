import { configureStore } from '@reduxjs/toolkit'
import userReducer, { login, logout } from './slices/userSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// const authMiddleware = (store:any) => (next:any) => (action:any) => {
//   if (login.match(action)) {
//     localStorage.setItem('user', JSON.stringify(action.payload))
//   } else if (logout.match(action)) {
//     localStorage.removeItem('user');
//   }
//   return next(action);
// };

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    user: persistedReducer
  },
  middleware: [thunk]
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch