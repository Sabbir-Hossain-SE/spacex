/* eslint-disable no-underscore-dangle */
import { Card, Image } from "antd";
import { AntCardProps } from "../@type/components";
import fallbackImg from "../utils/fallbackImg";

const AntCard: React.FC<AntCardProps> = ({ launch }) => {
    const customStyle = { height: "100%" };
    console.log(launch);

    return (
        <Card
            size="small"
            hoverable
            // extra={<a href="#">More</a>}
            style={customStyle}
        >
            <Image preview={false} width={100} src="error" fallback={fallbackImg} />
            <p>{launch?._id}</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    );
};

export default AntCard;
