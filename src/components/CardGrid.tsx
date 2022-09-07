import { Col, Row } from "antd";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const CardGrid: React.FC = () => (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
        </Col>
    </Row>
);

export default CardGrid;
