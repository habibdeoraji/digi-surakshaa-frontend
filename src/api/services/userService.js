import { api } from '../api';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => '/api/users/me',
      providesTags: ['User'],
    }),

    updateProfile: builder.mutation({
      query: (userData) => ({
        url: '/api/users/me',
        method: 'PUT',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
} = userApi; 