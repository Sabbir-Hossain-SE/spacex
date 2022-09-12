import { Col, Image, Row } from "antd";
import logo from "../assets/images/spacex-logo-png-transparent.png";
import SearchBar from "./SearchBar";

const Header = () => {
    const customColStyle = { width: "calc(100% - 40%)", padding: "20xp 10%" };
    return (
        <Row justify="center" style={{ height: "165px" }}>
            <Col style={customColStyle}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Image preview={false} width={280} src={logo} />
                    <h2 style={{ marginTop: "1rem" }}>
                        A collective list of free API for use in software and web development.
                    </h2>
                </div>
                <Row justify="center">
                    <SearchBar />
                </Row>
            </Col>
        </Row>
    );
};

export default Header;
