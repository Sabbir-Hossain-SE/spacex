/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Pagination, PaginationProps, Row } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../stateManagement/app/hooks";
import { useGetLaunchesQuery } from "../stateManagement/features/launch/launchSlice";
import { setPagination } from "../stateManagement/features/launch/paginationSlice";

const AntPagination: React.FC = () => {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState<number>(1);
    const { currentPage, pageLimit } = useAppSelector((state) => state.pagination);
    const { searchKey, otherFiltration } = useAppSelector((state) => state.filter);
    const { data, isLoading, isError, isSuccess, error } = useGetLaunchesQuery({
        offset: currentPage,
        limit: pageLimit,
        searchKey,
        sort: "flight_number",
        order: "desc",
        otherFiltration
    });

    const onChange: PaginationProps["onChange"] = (page, limit) => {
        dispatch(setPagination({ page, limit }));
        setCurrent(page);
    };
    return (
        <Row justify="end" align="middle" style={{ height: "60px" }}>
            <Col>
                <Pagination
                    total={data?.totalCount || 0}
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
