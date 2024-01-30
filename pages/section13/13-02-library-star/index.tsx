import React, { useState } from "react";
import { Space, Rate } from "antd";

// export default function App(): JSX.Element {
const App: React.FC = () => {
  const [value, setValue] = useState(3);
  console.log(value);
  return (
    <Space>
      <Rate onChange={setValue} value={value} />
    </Space>
  );
};

export default App;
