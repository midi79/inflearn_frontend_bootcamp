import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise,
} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { useEffect } from "react";

// To keep the cache from page refresh
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const load = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    // const result = localStorage.getItem("accessToken"); // Old fashion

    // New fashion
    void load.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. Catch error
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2. Get accessToken by refreshToken
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");

              // 3. Set header
              operation.setContext({
                header: {
                  ...operation.getContext().headers, // former Authorization which expired
                  Authorization: `Bearer ${newAccessToken}`, // Replace token
                },
              });
            }),
          ).flatMap(() => forward(operation)); // 4. Request failed query again
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    header: {
      Authorization: `Bearer ${accessToken}`,
      credentials: "include",
    },
  });

  const client = new ApolloClient({
    // uri: "http://backend-example.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
  )
}
