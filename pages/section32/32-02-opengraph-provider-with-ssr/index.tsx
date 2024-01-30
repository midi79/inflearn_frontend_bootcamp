import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(): JSX.Element {
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: "XXX" },
  });

  return (
    <>
      <Head>
        <meta property="og:title" content={data.fetchUseditem.name} />
        <meta
          property="og:description"
          content={data.fetchUseditem.description}
        />
        <meta property="og:image" content={data.fetchUseditem.images} />
      </Head>
      <div>Welcome to Used market! (This is body)</div>
    </>
  );
}

// "getServerSideProps" is the reserved method which was provided by Next.js
// Only run on server-side (Webpack server program)
export const getServerSideProps = async (): Promise<any> => {
  console.log("This is server!");
  const graphQLClient = new GraphQLClient(
    "https://backend-practice.codebootcamp.co.kr/graphql",
  );
  const result = await graphQLClient.request(FETCH_USEDITEM, {
    useditemId: "",
  });

  return {
    props: {
      data: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
