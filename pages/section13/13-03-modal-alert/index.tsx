import { Modal } from "antd";

export default function ModalAlertPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({ content: "Succeed to post the content" });
  };

  const onClickFail = (): void => {
    Modal.error({ content: "Fail to post the content" });
  };

  return (
    <>
      <button onClick={onClickSuccess}>Success</button>
      <button onClick={onClickFail}>Fail</button>
    </>
  );
}
