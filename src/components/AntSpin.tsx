import { Spin } from "antd";
import { useState } from "react";

const AntSpin = ({ children: ReactNode }) => {
    const [loading, setLoading] = useState(false);

    const toggle = (checked: boolean) => {
        setLoading(checked);
    };

    return <Spin spinning={loading}>{children}</Spin>;
};
export default AntSpin;
