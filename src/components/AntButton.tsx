import { Button } from "antd";
import { AntButtonProps } from "../@type/components";

const AntButton: React.FC<AntButtonProps> = ({ title, handleClick }) => {
    return (
        <Button onClick={handleClick} type="primary">
            {title}
        </Button>
    );
};

export default AntButton;
