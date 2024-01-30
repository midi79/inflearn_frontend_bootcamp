import { memo } from "react";

interface IWordPage {
  el: string;
}

function Word(props: IWordPage): JSX.Element {
  console.log("Child rendering", props.el);
  return <span>{props.el}</span>;
}

// Re-render the words which changed
export default memo(Word);
