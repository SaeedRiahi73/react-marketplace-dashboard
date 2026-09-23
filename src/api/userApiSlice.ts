import { apiSlice } from "@/api/apiSlice";
import { IResultInfo } from "@/interface/IResultInfo";
import {
  IChangeUserStatusArgs,
  IChangeCurrentUserPasswordRequest,
  ICreateUserRequest,
  ICurrentUserProfile,
  IUpdateCurrentUserProfileArgs,
  IUserDetail,
  IUserListData,
  IUserListItem,
  IUserListQuery,
} from "@/interface/IUser";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUserListData, IUserListQuery>({
      query: (params) => ({
        url: "/api/Users",
        params,
      }),
      transformResponse: (response: IResultInfo<IUserListData>) =>
        response.data,
      providesTags: (result) =>
        result
          ? [
              { type: "USER", id: "LIST" },
              ...result.items.map(({ id }) => ({
                type: "USER" as const,
                id,
              })),
            ]
          : [{ type: "USER", id: "LIST" }],
    }),
    getCurrentUser: builder.query<ICurrentUserProfile, void>({
      query: () => "/api/Users/me",
      transformResponse: (response: IResultInfo<ICurrentUserProfile>) =>
        response.data,
      providesTags: (result) =>
        result
          ? [
              { type: "USER", id: "CURRENT" },
              { type: "USER", id: result.id },
            ]
          : [{ type: "USER", id: "CURRENT" }],
    }),
    getUserById: builder.query<IUserDetail, string>({
      query: (id) => `/api/Users/${id}`,
      transformResponse: (response: IResultInfo<IUserDetail>) => response.data,
      providesTags: (result, _error, id) => [
        { type: "USER", id: result?.id ?? id },
      ],
    }),
    createUser: builder.mutation<IUserListItem, ICreateUserRequest>({
      query: (user) => ({
        url: "/api/Users/CreateUser",
        method: "POST",
        body: user,
      }),
      transformResponse: (response: IResultInfo<IUserListItem>) =>
        response.data,
      invalidatesTags: (result) =>
        result ? [{ type: "USER", id: "LIST" }] : [],
    }),
    changeUserStatus: builder.mutation<IUserListItem, IChangeUserStatusArgs>({
      query: ({ id, isActive }) => ({
        url: `/api/Users/${id}/status`,
        method: "PATCH",
        body: { isActive },
      }),
      transformResponse: (response: IResultInfo<IUserListItem>) =>
        response.data,
      invalidatesTags: (result, _error, { id }) =>
        result
          ? [
              { type: "USER", id: "LIST" },
              { type: "USER", id },
            ]
          : [],
    }),
    updateCurrentUserProfile: builder.mutation<ICurrentUserProfile,IUpdateCurrentUserProfileArgs>({
      query: ({ data }) => ({
        url: "/api/Users/UpdateCurrentUserProfile",
        method: "PATCH",
        body: data,
      }),
      transformResponse: (response: IResultInfo<ICurrentUserProfile>) =>
        response.data,
      invalidatesTags: (result) =>
        result
          ? [
              { type: "USER", id: "CURRENT" },
              { type: "USER", id: "LIST" },
              { type: "USER", id: result.id },
            ]
          : [],
    }),
    changeCurrentUserPassword: builder.mutation<Record<string, never>,IChangeCurrentUserPasswordRequest>({
      query: (passwords) => ({
        url: "/api/Users/ChangeCurrentUserPassword",
        method: "PUT",
        body: passwords,
      }),
      transformResponse: (response: IResultInfo<Record<string, never>>) =>
        response.data,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetCurrentUserQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useChangeUserStatusMutation,
  useUpdateCurrentUserProfileMutation,
  useChangeCurrentUserPasswordMutation,
} = userApiSlice;
