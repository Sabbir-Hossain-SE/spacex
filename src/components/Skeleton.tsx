import { Spin } from "antd";
import { useState } from "react";

const Skeleton = () => {
    const [loading, setLoading] = useState(false);

    const toggle = (checked: boolean) => {
        setLoading(checked);
    };

    return (
        <Spin spinning={loading}>
            <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            />
        </Spin>
    );
};

export default Skeleton;
