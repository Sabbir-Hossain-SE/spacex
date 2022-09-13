import { createApi, fetchBaseQuery, FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";
import { GetLaunchesParamProps } from "../../../@type/slice";
import getQueryString from "../../../utils/getQueryString";

export const launchSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spacexdata.com/v3/launches"
    }),
    tagTypes: ["Launches", "Launch"],
    endpoints: (builder) => ({
        getLaunches: builder.query<{ apiResponse: []; totalCount: number }, object>({
            query: (params: GetLaunchesParamProps) => {
                return getQueryString(params);
            },

            transformResponse(
                apiResponse: [],
                meta: FetchBaseQueryMeta | undefined
            ): { apiResponse: []; totalCount: number } {
                let totalCount = 0;
                totalCount = Number(meta?.response?.headers.get("spacex-api-count"));
                localStorage.setItem("totalCount", JSON.stringify(totalCount));
                if (apiResponse && apiResponse?.length > 0) {
                    return { apiResponse, totalCount };
                }
                return { apiResponse: [], totalCount };
            },
            providesTags: ["Launches"]
        }),
        getLaunch: builder.query<object, number>({
            query: (id) => `/launches/${id}`,
            providesTags: (result, error, arg) => [{ type: "Launch", id: arg }]
        })
    })
});

export const { useGetLaunchesQuery, useGetLaunchQuery } = launchSlice;
