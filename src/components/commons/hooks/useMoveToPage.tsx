import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void;
  visitedPage: string;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path); // Add filter not to add when is the login page
    // localStorage.setItem("visitedPage", path); // It is possible to add localStorage
    void router.push(path);
  };

  return {
    onClickMoveToPage,
    visitedPage,
  };
};
