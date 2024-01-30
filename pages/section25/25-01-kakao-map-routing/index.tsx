import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push("/section25/25-02-kakao-map-routing-moved");
  };

  return (
    <>
      <button onClick={onClickMove}>Move to page!</button>
      <br />
      {/* Not a SPA function and always load every page - not for React */}
      <a href="/section25/25-02-kakao-map-routing-moved">Page Move!</a>
      <br />
      {/* Link page for SPA, <a> is using for search engine */}
      <Link href="/section25/25-02-kakao-map-routing-moved">
        <a>Page Move!!</a>
      </Link>
    </>
  );
}
