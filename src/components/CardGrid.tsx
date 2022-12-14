/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import { Alert, Col, Grid, Row } from "antd";
import { useAppSelector } from "../stateManagement/app/hooks";
import { useGetLaunchesQuery } from "../stateManagement/features/launch/launchSlice";
import AntCard from "./AntCard";

const customRowStyle: React.CSSProperties = {};

const { useBreakpoint } = Grid;

const CardGrid: React.FC = () => {
    const { currentPage, pageLimit } = useAppSelector((state) => state.pagination);
    const { searchKey, otherFiltration } = useAppSelector((state) => state.filter);
    const screens = useBreakpoint();

    const { data, isLoading, isError, isSuccess, error } = useGetLaunchesQuery({
        offset: currentPage,
        limit: pageLimit,
        searchKey,
        sort: "flight_number",
        order: "desc",
        otherFiltration
    });

    let content;

    if (isLoading) {
        content = <Alert message="Data Is Fetching.." type="info" />;
    }
    if (isError) {
        content = <Alert message="Generate Network Error!" type="error" />;
    }
    if (isSuccess) {
        content = data.apiResponse.map((launch, index) => (
            <Col
                key={index}
                className="gutter-row"
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
                xxl={{ span: 6 }}
            >
                <AntCard launch={launch} />
            </Col>
        ));
    }

    return (
        <Row
            wrap
            gutter={
                screens.lg && screens.xl && screens.xxl
                    ? [24, 30]
                    : screens.xs
                    ? [12, 12]
                    : [24, 24]
            }
            style={customRowStyle}
        >
            {content}
        </Row>
    );
};

export default CardGrid;
