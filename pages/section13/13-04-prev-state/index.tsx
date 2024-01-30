import { useState } from "react";

export default function counterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  function onClickCountUp2(): void {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <div id="counter">{count}</div>
      <button onClick={onClickCountUp}>Add Counter!</button>
      <button onClick={onClickCountUp2}>Add Counter2!</button>
    </div>
  );
}
