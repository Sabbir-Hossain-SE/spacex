import { Button } from "antd";

const AntButton = ({ title = "Button", handleClick = () => {} }) => {
    return (
        <Button onClick={handleClick} type="primary">
            {title}
        </Button>
    );
};

export default AntButton;
