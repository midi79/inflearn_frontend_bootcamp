// import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function ObervableFlatmapPage(): JSX.Element {
  const onClickButton = (): void => {
    // new Promise((resolve, reject) => {});
    // new Observable((observer) => {});

    from(["lst query", "2nd query", "3rd query"])
      .flatMap((el) => from([`Apply logic1 to ${el}`, `Apply logic2 to ${el}`]))
      .subscribe((el) => {
        console.log(el);
      });
  };

  return (
    <>
      <button onClick={onClickButton}>Click!</button>
    </>
  );
}
