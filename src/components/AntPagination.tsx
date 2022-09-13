/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Pagination, PaginationProps, Row } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../stateManagement/app/hooks";
import { setPagination } from "../stateManagement/features/launch/paginationSlice";

const AntPagination: React.FC = () => {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState<number>(1);
    const { searchKey, otherFiltration } = useAppSelector((state) => state.filter);
    const totalCount = JSON.parse(localStorage.getItem("totalCount") || "");
    console.log(totalCount);

    const onChange: PaginationProps["onChange"] = (page, limit) => {
        dispatch(setPagination({ page, limit }));
        setCurrent(page);
    };
    return (
        <Row justify="end" align="middle" style={{ height: "60px" }}>
            <Col>
                <Pagination
                    total={totalCount}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={12}
                    defaultCurrent={1}
                    current={current}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};

export default AntPagination;
