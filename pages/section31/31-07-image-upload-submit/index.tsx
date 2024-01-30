import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const myGraphqlQuery = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const [myFunction] = useMutation(myGraphqlQuery);
  const [file, setFile] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async (): Promise<void> => {
    // 1. upload file to Cloud
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer: "Anderson",
          password: "1234",
          title: "This is title",
          contents: "This is contents",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0]; // multiple file upload
    if (file === undefined) return;
    console.log(file);
    console.log("File exist");

    // const result = await uploadFile({
    //   variables: {
    //     file,
    //   },
    // });
    // console.log(result.data?.uploadFile.url);
    // setImageUrl(result.data?.uploadFile.url ?? "");

    // 1. Create Temporary URL (Can access in my browser) - Old browser cannot support
    // const result = URL.createObjectURL(file);
    // console.log(result);

    // 2. Create Temporary URL (Can access in outer browser)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result);
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target?.result);
        setFile(file);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={wrapAsync(onChangeFile)} />
      <img src={imageUrl} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <button onClick={wrapAsync(onClickSubmit)}>Add board</button>
    </>
  );
}
