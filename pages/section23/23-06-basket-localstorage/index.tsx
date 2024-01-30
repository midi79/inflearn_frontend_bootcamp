import { useQuery, gql } from "@apollo/client";
import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoard($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  const onClickBasket = (basket: IBoard) => () => {
    // 1. Load baskets
    const baskets: IBoard[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]",
    );

    // 2 Check duplication
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("This item is already in the baskets");
      return;
    }

    // 3. Add clicked basket
    baskets.push(basket);

    // 4. Update basket
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>Add to basket</button>
        </div>
      ))}
    </div>
  );
}
