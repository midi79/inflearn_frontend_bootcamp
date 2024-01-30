import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState, type MouseEvent } from "react";
import CommentItem from "../../../src/components/units/16-comment-item";

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

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <CommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}
