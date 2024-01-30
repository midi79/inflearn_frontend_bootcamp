import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types";

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

     const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
          variables: { number: Number(router.query.address) }
     });

     return (
          <>
               <div>{ router.query.address } page moved!!</div>
               <div>Writer : { data?.fetchBoard?.writer }</div>
               <div>Title : { data?.fetchBoard?.title }</div>
               <div>Contents : { data?.fetchBoard?.contents }</div>
          </>
          
     )
}