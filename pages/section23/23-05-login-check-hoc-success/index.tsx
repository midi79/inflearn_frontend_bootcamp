import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated/types";
import { LoginCheck } from "../../../src/components/commons/hocs/loginCheck";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginPage(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <>Welcome, {data?.fetchUserLoggedIn.name}!</>;
}

export default LoginCheck(LoginPage);
