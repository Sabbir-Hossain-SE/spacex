/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import { GlobalOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Card, Image, Space, Tag, Typography } from "antd";
import type { SpaceSize } from "antd/es/space";
import { useState } from "react";
import { AntCardProps } from "../@type/components";
import fallbackImg from "../utils/fallbackImg";
import { formateDate } from "../utils/timeConverter";

const { Paragraph, Text } = Typography;

const AntCard: React.FC<AntCardProps> = ({ launch }) => {
    const customStyle = { overflow: "hidden" };
    const [ellipsis, setEllipsis] = useState(true);
    const [size, setSize] = useState<SpaceSize | [SpaceSize, SpaceSize]>("middle");

    return (
        <Card size="small" hoverable style={customStyle}>
            <Space direction="vertical">
                <Space size={size} align="start">
                    <Image
                        preview={false}
                        width={80}
                        height={80}
                        src={launch.links?.mission_patch_small ?? "error"}
                        fallback={fallbackImg}
                    />
                    <Space direction="vertical">
                        <Text>Launch Site: {launch?.launch_site?.site_name}</Text>
                        <Text>
                            Launch Date: {formateDate(new Date(launch.launch_date_utc)).toString()}
                        </Text>
                    </Space>
                </Space>
                <Space size="small" align="start">
                    <Text
                        style={ellipsis ? { width: 120 } : undefined}
                        ellipsis={ellipsis ? { tooltip: launch?.mission_name } : false}
                    >
                        Mission: {launch?.mission_name}
                    </Text>
                    <Text
                        style={ellipsis ? { width: 130 } : undefined}
                        ellipsis={ellipsis ? { tooltip: launch?.rocket?.rocket_name } : false}
                    >
                        Rocket: {launch?.rocket?.rocket_name}
                    </Text>
                </Space>

                <Space>
                    <a href={launch?.links?.wikipedia}>
                        <Tag icon={<GlobalOutlined />} color="#55acee">
                            Wikipedia
                        </Tag>
                    </a>
                    <a href={launch?.links?.video_link}>
                        <Tag icon={<YoutubeOutlined />} color="#cd201f">
                            Youtube
                        </Tag>
                    </a>
                </Space>
            </Space>
        </Card>
    );
};

export default AntCard;
