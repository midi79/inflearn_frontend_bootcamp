import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

export default function OpengraphDeveloperPage(): JSX.Element {
  const onClickEnter = async (): Promise<void> => {
    // 1. Find the address

    // 2. Scraping on that address
    const result = await axios.get(
      "http://localhost:3000/section32/32-01-opengraph-provider",
    );
    console.log(result.data);

    // 3. Search opengraph
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:")),
    );
  };
  return <button onClick={wrapAsync(onClickEnter)}>Enter after typing</button>;
}
