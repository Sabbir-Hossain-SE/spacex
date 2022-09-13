import { Col, Image, Row, Space } from "antd";
import logo from "../assets/images/spacex-logo-png-transparent.png";
import AntButton from "./AntButton";
import MultiSelectBox from "./MultiSelectBox";
import SearchBar from "./SearchBar";

const Header = () => {
    const customColStyle = { width: "calc(100% - 40%)", padding: "20xp 10%" };

    const handleResetAction = () => {};
    return (
        <Row justify="center" style={{ height: "175px" }}>
            <Col style={customColStyle}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: "16px"
                    }}
                >
                    <Image preview={false} width={280} src={logo} />
                </div>
                <Row justify="center">
                    <SearchBar />
                </Row>
                <Space style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                    <MultiSelectBox />
                    <AntButton title="Reset" handleClick={handleResetAction} />
                </Space>
            </Col>
        </Row>
    );
};

export default Header;
