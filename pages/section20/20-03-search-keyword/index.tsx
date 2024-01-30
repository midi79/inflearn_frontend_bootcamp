import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState, type ChangeEvent, type MouseEvent } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoard($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((value: string) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <div>
      Search word : <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>Search</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
