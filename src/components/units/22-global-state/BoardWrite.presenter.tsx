import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/stores";

export default function BoardWriteUI(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <div>{isEdit ? "Modify" : "Add"}</div>;
}
