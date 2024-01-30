import { useMutation } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from './BoardWrite.presenter';
import { myGraphqlQuery, UPDATE_BOARD } from './BoardWrite.queries';
import { useRouter } from "next/router";

export default function BoardWrite(props) {
    const router = useRouter();
    const [ writer, setWriter ] = useState("");
    const [ title, setTitle] = useState("");
    const [ contents, setContents] = useState("");

    const [ myFunction ] = useMutation(myGraphqlQuery);
    const [ updateFunction ] = useMutation(UPDATE_BOARD);

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result);
        router.push(`/section09/09-04-boards/${result.data.createBoard.number}`); 
    }

    const onClickUpdate = async () => {

        const myVariables = {
            number: Number(router.query.number)
        };
        
        if(writer) myVariables.writer = writer;
        if(title) myVariables.title = title;
        if(contents) myVariables.contents = contents;
        
        const result = await updateFunction({
            variables: myVariables
        })

        router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`); 
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
            onClickUpdate={onClickUpdate}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isEdit={props.isEdit}
            data={props.data}
        />
    )
}