import { memo } from "react";

function MemoizationWithChildPage(): JSX.Element {
  console.log("Child rendering");

  return (
    <>
      <h1>This is child component!</h1>
    </>
  );
}

export default memo(MemoizationWithChildPage);
