import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useState } from "react";

const AntPagination = () => {
    const [current, setCurrent] = useState(3);

    const onChange: PaginationProps["onChange"] = (page) => {
        console.log(page);
        setCurrent(page);
    };
    return (
        <Pagination
            total={85}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            defaultPageSize={20}
            defaultCurrent={1}
            current={current}
            onChange={onChange}
        />
    );
};

export default AntPagination;
