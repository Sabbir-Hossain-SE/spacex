import { Spin } from "antd";
import { useState } from "react";
import { AntSpinProps } from "../@type/components";

const AntSpin: React.FC<AntSpinProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const toggle = (checked: boolean) => {
        setLoading(checked);
    };

    return <Spin spinning={loading}>{children}</Spin>;
};
export default AntSpin;
