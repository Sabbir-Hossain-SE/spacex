import { Button } from "antd";

function AntButton({ title = "Button", handleClick = () => {} }) {
    return (
        <Button onClick={handleClick} type="primary">
            {title}
        </Button>
    );
}

export default AntButton;
