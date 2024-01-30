import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  type IQuery,
  type IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "XXXXX" },
    },
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = (): void => {
    void likeBoard({
      variables: {
        boardId: "XXXXX",
      },
      // refetchQueries: [{}]
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "XXXXX" },
          data: {
            fetchBoard: {
              _id: "XXXX",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>Current count(Like): </div>
      <button onClick={onClickLike}>Like!</button>
    </>
  );
}
