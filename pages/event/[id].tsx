import { MeetupEvent } from "../../components";
import { getAllPastEvents, getEvent } from "../../lib/graphql-client";

export default function EventPage({ event }) {
  return (
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <MeetupEvent event={event} />
    </main>
  );
}
export async function getStaticPaths() {
  const posts = await getAllPastEvents();
  return {
    paths: posts.map(({ id }) => ({
      params: { id },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { id } = params;
  const response = await getEvent(id);
  return {
    props: {
      event: response,
    },
    revalidate: 1,
  };
}
