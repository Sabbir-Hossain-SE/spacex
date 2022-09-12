import { Modal } from "antd";
import { useState } from "react";
import { AntModalProps } from "../@type/components";

const AntModal: React.FC<AntModalProps> = ({ children, title, isModalOpen, width, ...rest }) => {
    const [first, setfirst] = useState();
    return (
        <Modal title="Modal 1000px width" centered open={isModalOpen} width={width} {...rest}>
            {children}
        </Modal>
    );
};

export default AntModal;
