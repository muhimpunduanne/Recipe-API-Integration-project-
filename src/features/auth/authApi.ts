import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginCredentials, LoginResponse, User } from '@/types/auth';
import type { RootState } from '@/store/index';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://dummyjson.com/auth',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Login
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    // Get current user profile
    getCurrentUser: builder.query<User, void>({
      query: () => '/me',
    }),

    // Refresh token
    refreshToken: builder.mutation<LoginResponse, string>({
      query: (refreshToken) => ({
        url: '/refresh',
        method: 'POST',
        body: { refreshToken },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetCurrentUserQuery,
  useRefreshTokenMutation,
} = authApi;
