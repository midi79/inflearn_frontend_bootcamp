import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent, useRef } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";

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

  return (
    <>
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
    </>
  );
}
