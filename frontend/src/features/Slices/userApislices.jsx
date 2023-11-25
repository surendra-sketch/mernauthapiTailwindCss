import { apiSlice } from "./apiSlice";

const BASE_URL = "/api/users";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/register/user`,
        method: "POST",
        body: data,
      }),
    }),
    updateuser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/updateuser`,
        method: "PUT",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/logoutuser`,
        method: "POST",
        body: data,
      }),
    }),
    deteteuser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/deleteuser`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useUpdateuserMutation,
  useDeteteuserMutation,
} = userApiSlice;
