import { gql, useApolloClient } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage(): JSX.Element {
  // 1. Get data automatically when access the page, and do re-rendering (data save in Global state)
  // const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2. Get data when click the button, and do re-rendering (data save in Global state)
  // const [myFunction, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  // 3. Axios (data save in Global state)
  // const client = useApolloClient();
  // client.query()

  const client = useApolloClient();

  const onClickButton = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });

    console.log(result);
  };

  return (
    <>
      <button onClick={wrapAsync(onClickButton)}>Click</button>
    </>
  );
}
