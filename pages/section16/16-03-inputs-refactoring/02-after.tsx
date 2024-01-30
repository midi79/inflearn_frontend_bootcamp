import { gql, useMutation } from "@apollo/client";
import { MouseEvent, useState } from "react";

const myGraphqlQuery = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [myFunction] = useMutation(myGraphqlQuery);

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunction({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event): void => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      Writer : <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      Title : <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      Contents : <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API Request</button>
    </>
  );
}
