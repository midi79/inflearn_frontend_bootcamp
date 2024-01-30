import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

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
      Writer : <Input01 register={register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      Title : <Input01 register={register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      Contents : <Input01 register={register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      Email : <Input01 register={register("email")} />
      <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
      Password : <Input01 type="password" register={register("password")} />
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      Phone : <Input01 register={register("phone")} />
      <div style={{ color: "red" }}>{formState.errors.phone?.message}</div>
      <Button01 title="GRAPHQL-API Request" isActive={formState.isValid} />
    </form>
  );
}
