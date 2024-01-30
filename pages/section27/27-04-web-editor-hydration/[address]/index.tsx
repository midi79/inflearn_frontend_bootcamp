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

  // 659296515d6eaa0029f7d4d5
  return (
    <>
      <div style={{ color: "red" }}>Writer : {data?.fetchBoard?.writer}</div>
      <div style={{ color: "blue" }}>Title : {data?.fetchBoard?.title}</div>
      {/* <div>Contents : {data?.fetchBoard?.contents}</div> */}
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "violet" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard?.contents),
          }}
        />
      ) : (
        <div style={{ color: "violet" }}></div>
      )}
      <div style={{ color: "brown" }}>Address : Taupo</div>
    </>
  );
}
