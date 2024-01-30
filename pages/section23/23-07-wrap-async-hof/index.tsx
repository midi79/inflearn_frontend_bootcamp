import { gql, useMutation } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const myGraphqlQuery = gql`
  mutation {
    createBoard(
      writer: "Anderson"
      title: "First writing"
      contents: "Happy to meet you!"
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [myFunction] = useMutation(myGraphqlQuery);

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunction();
    console.log(result);
  };

  return (
    <>
      <button onClick={wrapAsync(onClickSubmit)}>GRAPHQL-API Request</button>
    </>
  );
}
