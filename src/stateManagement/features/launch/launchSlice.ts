import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type GetLaunchesParamProps = {
    offset: number;
    limit: number;
    searchKey: string | null;
    sort: string | null;
    order: string | null;
};

export const launchSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spacexdata.com/v3/launches"
    }),
    tagTypes: ["Launches", "Launch"],
    endpoints: (builder) => ({
        getLaunches: builder.query<[], object>({
            query: ({ offset, limit, searchKey, sort, order }: GetLaunchesParamProps) => {
                let queryString = "?id=true";
                if (searchKey) {
                    if (queryString !== "") {
                        queryString += `&q=${searchKey}`;
                    } else {
                        queryString += `?q=${searchKey}`;
                    }
                }

                if (offset) {
                    if (queryString !== "") {
                        queryString += `&offset=${offset}`;
                    } else {
                        queryString += `?offset=${offset}`;
                    }
                }

                if (limit) {
                    if (queryString !== "") {
                        queryString += `&limit=${limit}`;
                    } else {
                        queryString += `?limit=${limit}`;
                    }
                }

                if (sort && order) {
                    if (queryString !== "") {
                        queryString += `&sort=${sort}&order=${order}`;
                    } else {
                        queryString += `?sort=${sort}&order=${order}`;
                    }
                }

                return queryString;
            },
            keepUnusedDataFor: 600,
            providesTags: ["Launches"]
        }),
        getLaunch: builder.query<object, number>({
            query: (id) => `/launches/${id}`,
            providesTags: (result, error, arg) => [{ type: "Launch", id: arg }]
        })
    })
});

export const { useGetLaunchesQuery, useGetLaunchQuery } = launchSlice;
