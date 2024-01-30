import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated/types";
import { useEffect } from "react";
import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("Please login!");
      void router.push("/section23/23-03-login-check");
    }
  });

  return <>Welcome, {data?.fetchUserLoggedIn.name}!</>;
}
