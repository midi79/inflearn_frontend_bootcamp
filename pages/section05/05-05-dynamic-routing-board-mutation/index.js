import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router";

const myGraphqlQuery =  gql`    
    mutation createBoard($writer: String, $title: String, $content: String) {
        createBoard(writer: $writer, title: $title, contents: $content) {
        _id
        number
        message
        }
    }`


export default function GraphqlMutationPage() {
    const router = useRouter();

    const [ myFunction ] = useMutation(myGraphqlQuery);

    const onClickSubmit = async () => {

        try {

            const result = await myFunction({
                variables: { // "variables" or "$"
                    writer: "Anderson",
                    title: "I miss you",
                    content: "Long time no see, Let's go out to eat dinner"
                }
            })
    
            const number = result.data.createBoard.number;
            console.log(number);        
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${number}`);

        } catch(error) {
            alert(error.message);
        }        
    }

    return (
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API Request</button>
        </>
    )
}