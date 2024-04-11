import { baseApiSlice } from "@/redux/api/base-api";

export interface IUser {
  _id: string;
  email: string;
  state: string;
  lga: string;
  address: string;
  nin: string;
  password: string;
  userType: string;
  roles: [];
  phoneNumber: string;
  transactions: [];
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};


export const usersApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => ({
        url: `user`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery } = usersApiSlice;
