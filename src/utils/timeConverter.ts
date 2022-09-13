const getBrowserTimeZone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
function convertTZ(date: string, tzString: string) {
    return new Date(
        (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
            timeZone: tzString
        })
    );
}

export const convertIntoLocalTime = (date: string): string => {
    const timeZone = getBrowserTimeZone();
    const convertedTime = convertTZ(date, timeZone);
    return convertedTime.toString();
};

export const formateDate = (date: Date) => {
    const dateString = `${date.getUTCFullYear()}-${`0${date.getUTCMonth() + 1}`.slice(
        -2
    )}-${`0${date.getUTCDate()}`.slice(-2)}`;
    return dateString;
};

export const getLastYearStartEnd = (): { startDate: string; endDate: string } => {
    const date = new Date();
    const startDate = formateDate(new Date(date.getFullYear() - 1, 1));
    const endDate = formateDate(new Date(date.getFullYear(), 0));

    return { startDate, endDate };
};

export const getLastMonthStartEnd = (): { startDate: string; endDate: string } => {
    const date = new Date();
    const startDate = formateDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    const endDate = formateDate(new Date(date.getFullYear(), date.getMonth(), 0));

    return { startDate, endDate };
};

export const getLastWeekStartEnd = (): { startDate: string; endDate: string } => {
    const date = new Date();
    const endDate = formateDate(
        new Date(
            date.setTime(date.getTime() - (date.getDay() ? date.getDay() : 7) * 24 * 60 * 60 * 1000)
        )
    );

    const startDate = formateDate(new Date(date.setTime(date.getTime() - 6 * 24 * 60 * 60 * 1000)));

    return { startDate, endDate };
};
