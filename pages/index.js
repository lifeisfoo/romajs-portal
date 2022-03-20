import { initializeGraphQL } from "../lib/graphql-client";
import graphQLRequest from "../lib/graphql-request";
import App from "../components/app";
import Header from "../components/header";
import SocialLinks from "../components/SocialLinks";
import PostList, {
  allPostsQueryOptions,
  TARGET_EVENT_ID,
  GROUP_ID,
} from "../components/post-list";
import { ALL_POSTS_QUERY } from "../lib/graphql-queries";

export default function Home() {
  return (
    <App>
      <Header />
      <PostList />
      <SocialLinks />
    </App>
  );
}

export async function getStaticProps() {
  const client = initializeGraphQL();

  await graphQLRequest(
    client,
    ALL_POSTS_QUERY,
    allPostsQueryOptions(GROUP_ID)
  );

  return {
    props: {
      initialGraphQLState: client.cache.getInitialState(),
    },
    revalidate: 1,
  };
}
