import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent, useRef } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";

const myGraphqlQuery = gql`
  mutation createBoard($createBoardInput: CreateBoardInput) {
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
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0]; // multiple file upload
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) {
      return;
    }

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onClickImage = (): void => {
    fileRef.current?.click();
  };

  // ////////////////////////////////////////////////////////////////////////////////////////

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myFunction] = useMutation(myGraphqlQuery);

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer,
          password: "1234",
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  return (
    <>
      Writer : <input type="text" onChange={onChangeWriter} />
      <br />
      Title : <input type="text" onChange={onChangeTitle} />
      <br />
      Contents : <input type="text" onChange={onChangeContents} />
      <br />
      <div
        style={{ width: "100px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        Select Image
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        accept="image/jpeg,image/png"
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <button onClick={onClickSubmit}>GRAPHQL-API Request</button>
    </>
  );
}
