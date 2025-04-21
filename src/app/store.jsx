import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { marketShellApi } from '../services/marketShellApi'

export const store = configureStore({
  reducer: {
    [marketShellApi.reducerPath]: marketShellApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marketShellApi.middleware),
})

setupListeners(store.dispatch)