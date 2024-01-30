import { PlayCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MouseEvent } from "react";

const MyIcon = styled(PlayCircleOutlined)`
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickPlay = (event: MouseEvent<HTMLDivElement>): void => {
    console.log(event.currentTarget.id + " played!");
  };

  return (
    <div id="play01" onClick={onClickPlay}>
      <MyIcon />
    </div>
  );
}
