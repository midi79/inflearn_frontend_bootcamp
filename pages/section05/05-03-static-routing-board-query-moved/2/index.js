import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
     query {
          fetchBoard(number:1711) {
               number,
               writer,
               title,
               contents    
          }
     }
`


export default function StaticRoutingMovedPage() {
     const { data } = useQuery(FETCH_BOARD);

     return (
          <>
               <div>Second page moved!!</div>
               <div>Writer : { data?.fetchBoard.writer }</div>
               <div>Title : { data && data.fetchBoard.title }</div>
               <div>Contents : { data && data.fetchBoard.contents }</div>
          </>
          
     )
}