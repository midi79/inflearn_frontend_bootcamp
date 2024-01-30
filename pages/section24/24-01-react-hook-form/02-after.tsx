import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      Writer : <input type="text" {...register("writer")} />
      <br />
      Title : <input type="text" {...register("title")} />
      <br />
      Contents : <input type="text" {...register("contents")} />
      <br />
      Address :{" "}
      <input type="text" {...register("boardAddress.addressDetail")} />
      <button>GRAPHQL-API Request</button>
    </form>
  );
}
