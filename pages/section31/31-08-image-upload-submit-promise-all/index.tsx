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
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [myFunction] = useMutation(myGraphqlQuery);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async (): Promise<void> => {
    // upload file to Cloud

    // 1. Example using Promise all
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results);
    // const resultUrls = results.map((el) => el.data?.uploadFile.url);

    // 2. Example using Promise all - Optimizing
    const results = await Promise.all(
      files.map(async (el) => await uploadFile({ variables: { file: el } })),
    );
    console.log(results);
    const resultUrls = results.map((el) => el.data?.uploadFile.url);

    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer: "Anderson",
          password: "1234",
          title: "This is title",
          contents: "This is contents",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = event.target.files?.[0]; // multiple file upload
      if (file === undefined) return;
      console.log(file);
      console.log("File exist");

      // Create Temporary URL (Can access in outer browser)
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        console.log(event.target?.result);
        if (typeof event.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  return (
    <>
      <input type="file" onChange={wrapAsync(onChangeFile(0))} />
      <input type="file" onChange={wrapAsync(onChangeFile(1))} />
      <input type="file" onChange={wrapAsync(onChangeFile(2))} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <button onClick={wrapAsync(onClickSubmit)}>Add board</button>
    </>
  );
}
