import { useMutation } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from './BoardWrite.presenter';
import { myGraphqlQuery } from './BoardWrite.queries';

export default function BoardWrite() {

    const [ writer, setWriter ] = useState("")
    const [ title, setTitle] = useState("")
    const [ contents, setContents] = useState("")

    const [ myFunction ] = useMutation(myGraphqlQuery);

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: { // "variables" or "$"
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result);
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value);

    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
    }

    return (
        <BoardWriteUI 
            onClickSubmit={onClickSubmit}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
        />
    )
}