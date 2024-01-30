import { gql, useMutation } from "@apollo/client";
import { type ChangeEvent, useState } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { useRouter } from "next/router";

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

export default function StaticRoutingMovedPage(): JSX.Element {
  const [myFunction] = useMutation(myGraphqlQuery);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password: "1234",
        },
      },
    });
    console.log(result);
    const boardId = result.data.createBoard._id;
    void router.push(`/boards/${boardId}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  return (
    <>
      Writer :{" "}
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      <br />
      Title : <input role="input-title" type="text" onChange={onChangeTitle} />
      <br />
      Contents :{" "}
      <input role="input-contents" type="text" onChange={onChangeContents} />
      <br />
      <button role="submit-button" onClick={wrapAsync(onClickSubmit)}>
        GRAPHQL-API Request
      </button>
    </>
  );
}
