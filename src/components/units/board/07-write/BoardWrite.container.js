import { useMutation } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from './BoardWrite.presenter';
import { myGraphqlQuery } from './BoardWrite.queries';

export default function BoardWrite() {

    const [ isActive, setIsActive ] = useState(false);
    
    const [ writer, setWriter ] = useState("");
    const [ title, setTitle] = useState("");
    const [ contents, setContents] = useState("");

    const [ myFunction ] = useMutation(myGraphqlQuery);

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: { 
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result);
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        
        if( event.target.value && title && contents) {
            setIsActive(true);
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        
        if( writer && event.target.value && contents) {
            setIsActive(true);
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);

        if( writer && title && event.target.value) {
            setIsActive(true);
        }
    }

    return (
        <BoardWriteUI 
            onClickSubmit={onClickSubmit}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isActive={isActive}
        />
    )
}