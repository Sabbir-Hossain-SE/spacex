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
