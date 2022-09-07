const Modal = ({
    children = "Modal Content",
    title = "Modal TItle",
    isModalOpen = false,
    width = 1000,
    ...rest
}) => {
    return (
        <Modal title="Modal 1000px width" centered open={isModalOpen} width={width} {...rest}>
            {children}
        </Modal>
    );
};

export default Modal;
