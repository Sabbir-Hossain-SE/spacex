import { Col, Pagination, PaginationProps, Row } from "antd";
import { useState } from "react";

const AntPagination: React.FC = () => {
    const [current, setCurrent] = useState<number>(3);

    const onChange: PaginationProps["onChange"] = (page) => {
        setCurrent(page);
    };
    return (
        <Row justify="end" align="middle" style={{ height: "60px" }}>
            <Col>
                <Pagination
                    total={85}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={20}
                    defaultCurrent={1}
                    current={current}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};

export default AntPagination;
