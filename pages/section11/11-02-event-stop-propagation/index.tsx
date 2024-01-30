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

     const onClickAlert1 = () => {
          alert("onClickAlert1");
     }

     const onClickAlert2 = (event: any) => {
          event.stopPropagation();
          alert("onClickAlert2");
     }

     const onClickAlert3 = (event: any) => {
          //event.stopPropagation();
          alert("onClickAlert3");
     }

     return (
          <>
               {data?.fetchBoards.map((el: any) => (
                    <div id={el.writer} onClick={onClickAlert1}>
                         <span onClick={onClickAlert2}>
                              <input type="checkbox" onClick={onClickAlert3}/>
                         </span>
                         <span style={{margin: "10px"}}>{el.number}</span> 
                         <span style={{margin: "10px"}}>{el.title}</span> 
                         <span style={{margin: "10px"}}>{el.writer}</span>
                    </div>
               ))}
          </>
          
     )
}