import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const myGraphqlQuery = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myFunction] = useMutation(myGraphqlQuery);

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {
        // "variables" or "$"
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      Writer : <input type="text" onChange={onChangeWriter} />
      <br />
      Title : <input type="text" onChange={onChangeTitle} />
      <br />
      Contents : <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API Request</button>
    </>
  );
}
