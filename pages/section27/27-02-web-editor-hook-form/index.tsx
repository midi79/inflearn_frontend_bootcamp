import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  const { register, setValue, trigger } = useForm({ mode: "onChange" });

  // onChange is custom tag which was made by ReactQuill developer
  const onchangeContents = (value: string): void => {
    console.log("This is editor : " + value);
    setValue("contents", value === "<p><br></p>" ? "" : value); // when delete the contents, there will be remain tags in contents
    // When onchange, check the validity of contents
    void trigger("contents");
  };

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); // code-splitting
    Modal.success({ content: "Success to register the contents!" });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      Writer : <input type="text" {...register("writer")} />
      <br />
      Password : <input type="password" {...register("password")} />
      <br />
      Title : <input type="text" {...register("title")} />
      <br />
      Contents : <ReactQuill onChange={onchangeContents} />
      <button>Add</button>
    </form>
  );
}
