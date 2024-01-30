import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function PrefetchRoutingMovedPage(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.address },
  });

  return (
    <>
      <div>{router.query.address} page moved!!</div>
      <div>Writer : {data?.fetchBoard?.writer}</div>
      <div>Title : {data?.fetchBoard?.title}</div>
      <div>Contents : {data?.fetchBoard?.contents}</div>
    </>
  );
}
