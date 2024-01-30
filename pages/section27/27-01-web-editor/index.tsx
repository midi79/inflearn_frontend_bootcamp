// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
// import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  // onChange is custom tag which was made by ReactQuill developer
  const onchangeContents = (value: string): void => {
    console.log("This is editor : " + value);
  };

  //   useEffect(() => {
  //     async function downloadLib(): Promise<void> {
  //       const { Modal } = await import("antd"); // code-splitting
  //       Modal.success({ content: "Success to register the contents!" });
  //     }
  //     void downloadLib();
  //   }, []);

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); // code-splitting
    Modal.success({ content: "Success to register the contents!" });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      Writer : <input type="text" />
      <br />
      Password : <input type="password" />
      <br />
      Title : <input type="text" />
      <br />
      Contents : <ReactQuill onChange={onchangeContents} />
      <button>Add</button>
    </form>
  );
}
