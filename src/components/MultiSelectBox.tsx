import { Select } from "antd";
import React from "react";

const { Option } = Select;
const filterItems = [
    "Last Month",
    "Last Week",
    "Last Year",
    "Upcoming launch",
    "Successful Launches",
    "Collapsed Launches"
];
const children: React.ReactNode[] = [];
const { length } = filterItems;

let i = 0;
for (i = 0; i < length; i++) {
    children.push(<Option key={filterItems[i].toString()}>{filterItems[i]}</Option>);
}

const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
};

const MultiSelectBox: React.FC = () => {
    return (
        <Select
            mode="multiple"
            allowClear
            style={{ minWidth: "280px" }}
            placeholder="Please select"
            onChange={handleChange}
        >
            {children}
        </Select>
    );
};

export default MultiSelectBox;
