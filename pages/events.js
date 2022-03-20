import Header from "../components/Header";
import SocialLinks from "../components/SocialLinks";
import PostList from "../components/post-list";
import { ALL_POSTS_QUERY } from "../lib/graphql-queries";
import { GROUP_ID } from "../lib/config";

import { GraphQLClient } from "../lib/graphql-client";

export default function Home({ allEvents }) {
  const { pastEvents } = allEvents;
  console.log(pastEvents);
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Header />
        <PostList eventList={pastEvents.edges.map((ee) => ee.node)} />
        <SocialLinks />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const response = await GraphQLClient(ALL_POSTS_QUERY, { urlname: GROUP_ID });
  const { data } = response;
  const { allEvents } = data;

  return {
    props: {
      allEvents,
    },
    revalidate: 1,
  };
}
