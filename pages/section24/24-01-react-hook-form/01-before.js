import { useState } from "react";

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {};

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
