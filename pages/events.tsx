import { PostList, SocialLinks } from "../components";
import { getAllPastEvents } from "../lib/graphql-client";

export default function Events({ allEvents }) {
  return (
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <PostList eventList={allEvents} />
      <SocialLinks />
    </main>
  );
}

export async function getStaticProps() {
  const response = await getAllPastEvents();
  return {
    props: {
      allEvents: response,
    },
    revalidate: 1,
  };
}
