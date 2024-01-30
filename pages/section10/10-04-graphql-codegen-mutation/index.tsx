import { gql, useMutation } from "@apollo/client"
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types";

const myGraphqlQuery =  gql`    
    mutation createBoard($writer: String, $title: String, $content: String) {
        createBoard(writer: $writer, title: $title, contents: $content) {
        _id
        number
        message
        }
    }`

export default function GraphqlMutationPage() {
    // const [counter, setCounter] = useState<number>(0);

    // useMutation<Result type, Variable type>
    const [ myFunction ] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(myGraphqlQuery); 

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: { 
                writer: "Anderson",
                title: "I miss you",
                contents: "Long time no see, Let's hang out together"
            }
        })
        console.log(result);
    }

    return (
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API Request</button>
        </>
    )
}