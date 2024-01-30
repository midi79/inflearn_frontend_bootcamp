import { useState } from "react";

export default function counterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    // 1. original
    // setCount((prev) => prev + 1);

    // 2. functional
    // setCount(function (prev) {
    //   return prev + 1;
    // });

    // 3. Change argument
    setCount((value) => value + 1);
  }

  return (
    <div>
      <div id="counter">{count}</div>
      <button onClick={onClickCountUp}>Add Counter!</button>
    </div>
  );
}
