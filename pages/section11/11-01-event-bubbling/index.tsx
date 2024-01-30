import { useQuery, gql } from "@apollo/client"
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
     query {
          fetchBoards {
               number,
               writer,
               title,
               contents    
          }
     }
`


export default function StaticRoutingMovedPage() {
     const { data } = useQuery(FETCH_BOARDS);

     const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
          alert(event.currentTarget.id + " is writer");
     }

     return (
          <>
               {data?.fetchBoards.map((el: any) => (
                    <div id={el.writer} onClick={onClickAlert}>
                         <span>
                              <input type="checkbox"/>
                         </span>
                         <span style={{margin: "10px"}}>{el.number}</span> 
                         <span style={{margin: "10px"}}>{el.title}</span> 
                         <span style={{margin: "10px"}}>{el.writer}</span>
                    </div>
               ))}
          </>
          
     )
}