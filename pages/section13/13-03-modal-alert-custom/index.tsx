import { Modal } from "antd";
import { useState } from "react";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };

  const handleOk = (): void => {
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>Open Modal</button>
      <Modal
        title="Model title"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Enter the password : <input type="password" />
      </Modal>
    </>
  );
}
