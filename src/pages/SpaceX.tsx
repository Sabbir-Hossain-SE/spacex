/* eslint-disable no-nested-ternary */
import { Grid } from "antd";
import AntPagination from "../components/AntPagination";
import CardGrid from "../components/CardGrid";
import Header from "../components/Header";

const { useBreakpoint } = Grid;

const SpaceX: React.FC = () => {
    const screens = useBreakpoint();
    const { xs, sm, md, lg, xl, xxl } = screens;
    const customContainerStyle: React.CSSProperties = {
        height: "100%",
        margin: xxl ? "0 240px" : xl ? "0 160px" : lg ? "0 80px" : "0"
    };
    return (
        <div className="cards_container" style={customContainerStyle}>
            <Header />
            <CardGrid />
            <AntPagination />
        </div>
    );
};

export default SpaceX;
