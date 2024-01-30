import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";
import FetchPolicyExample from "../../../src/components/units/22-fetch-policy";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  const onClickIsOpen = (): void => {
    setIsOpen(true);
  };

  const onClickMove = (): void => {
    void router.push("/section22/22-01-fetch-policy-moved");
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>
        When you click the button, a new component will appear!
      </button>
      {isOpen && <FetchPolicyExample />}
      ########################################################################
      <button onClick={onClickMove}>
        When you click the button, you will move to another page!
      </button>
    </div>
  );
}
