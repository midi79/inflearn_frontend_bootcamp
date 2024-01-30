import { useQuery, gql, useMutation } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const myGraphqlQuery = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [myFunction] = useMutation(myGraphqlQuery);

  interface IPrev {
    __ref: string;
  }

  const onClickDelete = (boardId: string) => (): void => {
    void deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev: IPrev[], { readField }) => {
              const deletedId = data.deleteBoard;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId,
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = (): void => {
    void myFunction({
      variables: {
        createBoardInput: {
          writer: "Anderson",
          password: "1234",
          title: "This is title",
          contents: "Here is contents",
        },
      },

      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickDelete(el._id)}>Delete</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>Add</button>
    </div>
  );
}
