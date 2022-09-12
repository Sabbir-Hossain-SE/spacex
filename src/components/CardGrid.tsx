/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import { Col, Grid, Row } from "antd";
import { useAppSelector } from "../stateManagement/app/hooks";
import { useGetLaunchesQuery } from "../stateManagement/features/launch/launchSlice";
import AntCard from "./AntCard";

const customRowStyle: React.CSSProperties = { height: "calc(100% - 220px)" };

const { useBreakpoint } = Grid;

const CardGrid: React.FC = () => {
    const { currentPage, pageLimit, totalItem } = useAppSelector((state) => state.pagination);
    const screens = useBreakpoint();
    // const dispatch = useAppDispatch();
    console.log(screens);

    const {
        data: launches,
        isLoading,
        isError,
        isSuccess,
        error
    } = useGetLaunchesQuery({
        offset: currentPage,
        limit: pageLimit,
        searchKey: "",
        sort: "flight_number",
        order: "desc"
    });
    // console.log(currentPage, pageLimit, totalItem, "cu");
    // console.log(launches);

    // useEffect(() => {
    //     dispatch(setTotalItem(launches?.length));
    // }, [dispatch, launches]);
    let content;

    if (isLoading) {
        content = <div>Loading..</div>;
    }
    if (isError) {
        content = <div>error...</div>;
    }
    if (isSuccess) {
        content = launches.map((launch, index) => (
            <Col
                key={index}
                className="gutter-row"
                xs={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
                xxl={{ span: 6 }}
                // style={customColumnStyle}
            >
                <AntCard launch={launch} />
            </Col>
        ));
    }

    return (
        <Row
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
