import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseAuthPage(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <button onClick={onClickMoveToPage("/boards")}>
        Move to Bulletin board
      </button>
      <button onClick={onClickMoveToPage("/markets")}>Move to Market</button>
      <button onClick={onClickMoveToPage("/mypages")}>Move to My Page</button>
    </>
  );
}
