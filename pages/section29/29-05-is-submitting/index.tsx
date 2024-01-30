import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);

    setIsSubmitting(false);
  };

  return (
    <div>
      <button onClick={wrapAsync(onClickSync)} disabled={isSubmitting}>
        REST-API(Sync) Request
      </button>
    </div>
  );
}
