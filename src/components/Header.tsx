import { Col, Grid, Image, Row } from "antd";
import logo from "../assets/images/spacex-logo-png-transparent.png";
import SearchBar from "./SearchBar";

const { useBreakpoint } = Grid;
const Header = () => {
    const screens = useBreakpoint();
    const { xs, sm, md, lg, xl, xxl } = screens;
    const customColStyle = { width: "calc(100% - 40%)", padding: "20xp 10%" };
    return (
        <Row justify="center" style={{ height: "165px" }}>
            <Col style={customColStyle}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: "20px"
                    }}
                >
                    <Image preview={false} width={280} src={logo} />
                </div>
                <Row justify="center">
                    <SearchBar />
                </Row>
            </Col>
        </Row>
    );
};

export default Header;
