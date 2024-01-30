import {  RedInput, BlueButton } from './BoardWrite.style';
import { IBoardWriteUIProps } from './BoardWrite.types';

export default function BoardWriteUI(props: IBoardWriteUIProps) {

   return (
        <>
            Writer : <RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer} /><br/>
            Title : <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title} /><br/>
            Contents : <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} /><br/>
            <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
                {props.isEdit ? "Edit" : "Add"}
            </BlueButton>
        </>
    )
}