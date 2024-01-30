import { MyEmail, MyEmailInput } from '../../../styles/01-02-emotion'

export default function EmotionPage() {
    return (
        <div>
            <MyEmail>E-mail : </MyEmail>
            <MyEmailInput type="text"/>
            <button>Click!</button>
            <img src="/next.svg" />
        </div>
    )
}