import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = (): void => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("Please login!");
      void router.push("/section23/23-05-login-check-hoc");
    }
  });
};
