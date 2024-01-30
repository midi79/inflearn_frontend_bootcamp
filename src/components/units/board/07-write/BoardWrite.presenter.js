import {  RedInput, BlueButton } from './BoardWrite.style';

export default function BoardWriteUI(props) {
    console.log("props.isActive : " + props.isActive);

   return (
        <>
            Writer : <RedInput type="text" onChange={props.onChangeWriter}/><br/>
            Title : <input type="text" onChange={props.onChangeTitle} /><br/>
            Contents : <input type="text" onChange={props.onChangeContents} /><br/>
            <BlueButton 
                onClick={props.onClickSubmit}
                isActive={props.isActive}
                >
                    GRAPHQL-API Request
            </BlueButton>
        </>
    )
}