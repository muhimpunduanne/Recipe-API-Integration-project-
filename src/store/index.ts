import { configureStore } from '@reduxjs/toolkit';
import { recipesApi } from '@features/recipes/recipesApi';
import { authApi } from '@features/auth/authApi';
import authReducer from '@features/auth/authSlice';

export const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(recipesApi.middleware)
      .concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
