import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

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

export default function DynamicRoutingMovedPage(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.address },
  });

  return (
    <div>
      <div style={{ color: "red" }}>Writer : {data?.fetchBoard?.writer}</div>
      <div style={{ color: "green" }}>Title : {data?.fetchBoard?.title}</div>
      {/* <div>Contents : {data?.fetchBoard?.contents}</div> */}
      {typeof window !== "undefined" && (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard?.contents),
          }}
        />
      )}
      <div style={{ color: "brown" }}>Address : Taupo </div>
    </div>
  );
}
