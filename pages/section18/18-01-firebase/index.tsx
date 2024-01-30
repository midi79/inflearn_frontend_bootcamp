import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../src/commons/libraries/firebase";

export default function FirebasePage(): JSX.Element {
  const onClickSubmit = (): void => {
    const board = collection(getFirestore(firebaseApp), "board");
    void addDoc(board, {
      writer: "Alice",
      title: "Hello",
      contents: "Nice to see you!",
    });
  };

  const onClickFetch = async (): Promise<void> => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const dataList = result.docs.map((el) => el.data());
    console.log(dataList);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Register</button>
      <button onClick={onClickFetch}>Search</button>
    </>
  );
}
