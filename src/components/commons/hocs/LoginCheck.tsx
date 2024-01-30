import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

// @react/display-name
export const LoginCheck = (Component: any) => (props: any) => {
  const router = useRouter();
  const load = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // Old fashion
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("Please login!");
  //     void router.push("/section23/23-05-login-check-hoc");
  //   }
  // });

  // Not good -> Double request
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if (newAccessToken === undefined) {
  //       alert("Please login!");
  //       void router.push("/section23/23-05-login-check-hoc");
  //     }
  //   });
  // });

  // Use global function with no double request
  useEffect(() => {
    void load.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("Please login!");
        void router.push("/section23/23-05-login-check-hoc");
      }
    });
  });

  return <Component {...props} />;
};
