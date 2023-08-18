/* eslint-disable prettier/prettier */
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {createSlice} from '@reduxjs/toolkit';

import { User} from '../types/user';
import {uri} from '../constants/uri';

type initialUser = {
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isAuth: boolean;
};

const initialState: initialUser = {
  token: null,
  isLoading: false,
  error: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate(state) {
      state.token = '123';
    },
    signOut(state) {
      state.token = null;
    },
  },
});

export const userApi = createApi({
  reducerPath: 'userApi',
   tagTypes:["User"],

  baseQuery: fetchBaseQuery({

    prepareHeaders: (headers) => {
        
        headers.set('Access-Control-Allow-Origin', '*')
        headers.set("Authentication","12345")
        return headers
    },
    baseUrl: uri.baseUrl,
  }),

  endpoints: builder => ({
    addUser: builder.mutation<User, User>({
      query: login => ({
        url: '/users',
        body: login,
        method: 'POST',
      }),
      invalidatesTags:["User"]
    }),

    deleteUser:builder.mutation<User[],User>({
        query:user=>({
        url:'/deleteUser',
        body:user,
        method:'DELETE'
        }),
        invalidatesTags:["User"]
    }),
    
    getUsers: builder.query<User[],string>({
        query: () => '/users',
        providesTags: ['User'],
      }),
  }),
});


export const {useAddUserMutation,useGetUsersQuery} = userApi;
export default userSlice.reducer;