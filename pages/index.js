
import App from "../components/app";
import Header from "../components/header";
import SocialLinks from "../components/SocialLinks";
import PostList, {
  allPostsQueryOptions,
  TARGET_EVENT_ID,
  GROUP_ID,
} from "../components/post-list";
import { ALL_POSTS_QUERY } from "../lib/graphql-queries";
import { GraphQLClient } from "../lib/graphql-client";

export default function Home({allEvents}) {
const {pastEvents}=allEvents
  return (
    <App>
      <Header />
      <PostList eventList={pastEvents.edges.map(ee=>ee.node)}/>
      <SocialLinks />
    </App>
  );
}

export async function getStaticProps() {
  const response = await GraphQLClient(ALL_POSTS_QUERY,{urlname:GROUP_ID});
  const {data}=response
  const {allEvents} = data
  return {
    props: {
      allEvents,
    },
    revalidate: 1,
  };
}
