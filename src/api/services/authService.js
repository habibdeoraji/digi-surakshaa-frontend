import { api } from '../api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth/register',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    enable2FA: builder.mutation({
      query: () => ({
        url: '/api/auth/2fa/enable',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),

    verify2FA: builder.mutation({
      query: (token) => ({
        url: '/api/auth/2fa/verify',
        method: 'POST',
        body: { token },
      }),
    }),

    disable2FA: builder.mutation({
      query: (token) => ({
        url: '/api/auth/2fa/disable',
        method: 'POST',
        body: { token },
      }),
      invalidatesTags: ['Auth'],
    }),

    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: '/api/auth/refresh-token',
        method: 'POST',
        body: { refreshToken },
      }),
      invalidatesTags: ['Auth'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/api/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useEnable2FAMutation,
  useVerify2FAMutation,
  useDisable2FAMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
} = authApi; 