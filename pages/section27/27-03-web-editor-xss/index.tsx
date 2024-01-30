import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

const myGraphqlQuery = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  const router = useRouter();
  const [myFunction] = useMutation(myGraphqlQuery);

  const { register, setValue, trigger, handleSubmit } = useForm({
    mode: "onChange",
  });

  // onChange is custom tag which was made by ReactQuill developer
  const onchangeContents = (value: string): void => {
    console.log("This is editor : " + value);
    setValue("contents", value === "<p><br></p>" ? "" : value); // when delete the contents, there will be remain tags in contents
    // When onchange, check the validity of contents
    void trigger("contents");
  };

  const onClickSubmit = async (data: any): Promise<void> => {
    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });

    const { Modal } = await import("antd"); // code-splitting
    Modal.success({ content: "Success to register the contents!" });

    const boardId = result.data.createBoard._id;
    void router.push(`/section27/27-03-web-editor-xss-detail/${boardId}`);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
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
