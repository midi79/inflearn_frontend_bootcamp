import { useState } from "react";
import Word from "./02-child";

export default function MemoizationWithMapParentPage(): JSX.Element {
  const [data, setData] = useState("Anderson ate lunch very deliciously");

  const onClickChange = (): void => {
    setData("Alice ate dinner very deliciously");
  };
  return (
    <>
      {/* Only changed words will re-rendered, but re-render when the key is different */}
      {data.split(" ").map((el, index) => (
        <Word key={index} el={el} />
      ))}
      <button onClick={onClickChange}>Change</button>
    </>
  );
}
