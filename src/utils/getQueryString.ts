import { GetLaunchesParamProps } from "../@type/slice";
import { getLastMonthStartEnd, getLastWeekStartEnd, getLastYearStartEnd } from "./timeConverter";

const getQueryString = (params: GetLaunchesParamProps) => {
    const { offset, limit, searchKey, sort, order, otherFiltration } = params;
    let queryString = "?id=true";
    if (searchKey) {
        if (queryString !== "") {
            queryString += `&rocket_name=${searchKey}`;
        } else {
            queryString += `?rocket_name=${searchKey}`;
        }
    }

    if (offset && otherFiltration?.length === 0) {
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

    if (otherFiltration?.find((filterOption: string) => filterOption === "Last Month")) {
        const lastMonth = getLastMonthStartEnd();
        queryString += `&start=${lastMonth.startDate}&end=${lastMonth.endDate}`;
    }

    if (otherFiltration?.find((filterOption: string) => filterOption === "Last Year")) {
        const lastYear = getLastYearStartEnd();
        queryString += `&start=${lastYear.startDate}&end=${lastYear.endDate}`;
    }

    if (otherFiltration?.find((filterOption: string) => filterOption === "Last Week")) {
        const lastWeek = getLastWeekStartEnd();
        queryString += `&start=${lastWeek.startDate}&end=${lastWeek.endDate}`;
    }

    if (otherFiltration?.find((filterOption: string) => filterOption === "Upcoming launch")) {
        queryString += `&upcoming=true`;
    }

    if (otherFiltration?.find((filterOption: string) => filterOption === "Successful Launches")) {
        queryString += `&launch_success=true`;
    }

    if (otherFiltration?.find((filterOption: string) => filterOption === "Collapsed Launches")) {
        queryString += `&launch_success=false`;
    }

    return {
        url: queryString
    };
};

export default getQueryString;
