import { configureStore,combineReducers } from '@reduxjs/toolkit'
import todoSlice from './ToDoSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage'
// export default configureStore({
//   reducer: {
//     todos: todoSlice,
//   },
// })

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
    todos: todoSlice
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store)