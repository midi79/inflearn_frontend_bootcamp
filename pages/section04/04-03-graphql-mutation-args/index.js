import { gql, useMutation } from "@apollo/client"

export default function GraphqlMutationPage() {

    const myGraphqlQuery =  gql`    
        mutation createBoard($writer: String, $title: String, $content: String) {
            createBoard(writer: $writer, title: $title, contents: $content) {
            _id
            number
            message
            }
        }`

    const [ myFunction ] = useMutation(myGraphqlQuery);

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: { // "variables" or "$"
                writer: "Anderson",
                title: "I miss you",
                content: "Long time no see, Let's hang out together"
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