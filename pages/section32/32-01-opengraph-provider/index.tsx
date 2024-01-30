import Head from "next/head";

export default function OpengraphProviderPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta property="og:title" content="Used market" />
        <meta property="og:description" content="Welcome to my Used market" />
        <meta property="og:image" content="http://XXXX" />
      </Head>
      <div>Welcome to Used market! (This is body)</div>
    </>
  );
}
