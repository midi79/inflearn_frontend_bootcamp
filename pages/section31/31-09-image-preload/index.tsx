import { useRouter } from "next/router";
import { useEffect } from "react";

const imageCache = [];

export default function ImagePreloadPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/%22_Stay_on_the_Job%22_Ralley_at_K-25_by_J.A._Jones_Construction_Co._1944_Oak_Ridge_%2824798675620%29.jpg/1024px-%22_Stay_on_the_Job%22_Ralley_at_K-25_by_J.A._Jones_Construction_Co._1944_Oak_Ridge_%2824798675620%29.jpg";
    img.onload = () => {
      imageCache.push(img);
    };
  }, []);

  const onClickMove = (): void => {
    void router.push("/section31/31-09-image-preload-moved");
  };
  return <button onClick={onClickMove}>Page Move!</button>;
}
