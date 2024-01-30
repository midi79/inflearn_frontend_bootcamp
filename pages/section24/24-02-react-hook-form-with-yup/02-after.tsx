import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  email: string;
  password: string;
  phone: string;
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      Writer : <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      Title : <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      Contents : <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      Email : <input type="text" {...register("email")} />
      <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
      Password : <input type="text" {...register("password")} />
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      Phone : <input type="text" {...register("phone")} />
      <div style={{ color: "red" }}>{formState.errors.phone?.message}</div>
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        GRAPHQL-API Request
      </button>
    </form>
  );
}
