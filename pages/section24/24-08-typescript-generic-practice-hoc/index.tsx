import { useRouter } from "next/router";
import { useEffect, type ReactElement } from "react";

// prettier-ignore
export const LoginCheck = (Component: () => JSX.Element) =>
  <P extends Record<string, unknown>>(props: P): ReactElement<P> => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("Please login!");
        void router.push("/section23/23-05-login-check-hoc");
      }
    }, []);

    return <Component {...props} />;
  };
