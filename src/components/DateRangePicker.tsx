import { DatePicker } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import moment from "moment";

const { RangePicker } = DatePicker;

const onChange: RangePickerProps["onChange"] = (dates, dateStrings) => {
    if (dates) {
        console.log("From: ", dates[0], ", to: ", dates[1]);
        console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    } else {
        console.log("Clear");
    }
};

const DateRangePicker: React.FC = () => {
    return (
        <RangePicker
            ranges={{
                Today: [moment(), moment()],
                "This Month": [moment().startOf("month"), moment().endOf("month")]
            }}
            showTime
            format="YYYY/MM/DD HH:mm:ss"
            onChange={onChange}
        />
    );
};

export default DateRangePicker;
