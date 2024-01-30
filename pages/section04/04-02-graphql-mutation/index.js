import { gql, useMutation } from "@apollo/client"

export default function GraphqlMutationPage() {

    const myGraphqlQuery =  gql`    
        mutation {
            createBoard(writer:"Anderson", title:"First writing", contents:"Happy to meet you!") {
            _id
            number
            message
            }
        }`

    const [ myFunction ] = useMutation(myGraphqlQuery);

    const onClickSubmit = async () => {
        const result = await myFunction()
        console.log(result);
    }

    return (
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API Request</button>
        </>
    )
}