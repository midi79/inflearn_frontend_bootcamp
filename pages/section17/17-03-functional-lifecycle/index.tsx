import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount
  useEffect(() => {
    console.log("Run after render");
  }, []);

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("Run after update");
  });

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Run before delete");
    };
  }, []);

  // Combination
  useEffect(() => {
    console.log("Run after render");
    return () => {
      console.log("Run before delete");
    };
  });

  const onClickCountUp = (): void => {
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>Add counter</button>
      <button onClick={onClickMove}>Exit</button>
    </>
  );
}
