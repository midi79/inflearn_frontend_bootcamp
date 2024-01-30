import { useCallback, useMemo, useState } from "react";
import MemoizationWithChildPage from "./02-child";

export default function MemoizationPage(): JSX.Element {
  console.log("Component rendered.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. save variable by useMemo
  const randomNumber = useMemo(() => Math.random(), []);
  console.log(randomNumber);

  // 2. save function by useCallback
  const onClickCountLet = useCallback((): void => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  const onClickCountState = useCallback((): void => {
    setCountState((prev) => prev + 1);
  }, []);

  // 3. imitate useCallback with useMemo
  //   const onClickCountState2 = useMemo(() => {
  //     return (): void => {
  //       console.log(countState + 1);
  //       setCountState(countState + 1);
  //     };
  //   }, []);

  return (
    <>
      <div>============================================</div>
      <h1>This is parent component!</h1>
      <div>Counter(let) : {countLet}</div>
      <button onClick={onClickCountLet}>Counter(let) add +1</button>
      <br />
      <div>Counter(state): {countState}</div>
      <button onClick={onClickCountState}>Counter(state) add +1</button>
      <div>============================================</div>
      <MemoizationWithChildPage />
    </>
  );
}
