import { createApi, fetchBaseQuery, FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";

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
                        queryString += `&rocket_name=${searchKey}`;
                    } else {
                        queryString += `?rocket_name=${searchKey}`;
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

                return {
                    url: queryString
                };
            },

            transformResponse(apiResponse: [], meta: FetchBaseQueryMeta | undefined): [] {
                const totalCount = meta?.response?.headers.get("spacex-api-count");
                localStorage.setItem("totalCount", JSON.stringify(totalCount));
                if (apiResponse && apiResponse?.length > 0) {
                    return apiResponse;
                }
                return [];
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
