import { gql, useMutation } from "@apollo/client"

export default function GraphqlMutationPage() {

    const CREATE_PRODUCT =  gql`    
        mutation createProduct($seller : String, $createProductInput: CreateProductInput!){
            createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
            }
        }`
//"GraphQLError: Variable \"$createProductInput\" of required type \"CreateProductInput!\" was not provided."
    const [ createProduct ] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "Anderson",
                createProductInput: {
                    name: "Macbook pro",
                    detail: "M3 16inch Macbook pro 64GB RAM 1TB SSD",
                    price: 5000
                } 
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