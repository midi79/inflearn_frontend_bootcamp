import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
     query fetchBoard($number: Int) {
          fetchBoard(number:$number) {
               number,
               writer,
               title,
               contents    
          }
     }
`
export default function DynamicRoutingMovedPage() {
     const router = useRouter();

     const { data } = useQuery(FETCH_BOARD, {
          variables: { number: Number(router.query.number) }
     });

     const onClickMove = () => {
        router.push(`/section09/09-04-boards/${router.query.number}/edit`);
     }

     return (
          <>
               <div>{ router.query.number } page moved!!</div>
               <div>Writer : { data?.fetchBoard?.writer }</div>
               <div>Title : { data?.fetchBoard?.title }</div>
               <div>Contents : { data?.fetchBoard?.contents }</div>
               <button onClick={onClickMove}>Go to edit</button>
          </>
          
     )
}