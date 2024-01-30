import { type ChangeEvent, useState } from "react";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  // 1. get Access Token
  const onChangeLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });

      const accessToken = result.data.loginUser.accessToken;
      console.log(accessToken);

      // 2. Save the accessToken to global state (Recoil)
      if (accessToken === undefined) {
        alert("Failed to login");
        return;
      }
      setAccessToken(accessToken);

      // 3. Move to login success page
      void router.push("/section23/23-01-login-success");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      E-mail: <input type="text" onChange={onChangeEmail} />
      Password: <input type="password" onChange={onChangePassword} />
      <button onClick={onChangeLogin}>Login</button>
    </>
  );
}
