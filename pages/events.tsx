import { GetStaticPropsResult } from "next";
import { PostList, SocialLinks } from "../components";
import { cachedGetAllPastEvents } from "../lib/graphql-client";
import { MeetupEventType } from "../types";

type EventsListPageProps = {
  allEvents: MeetupEventType[];
};

export default function EventsListPage({
  allEvents,
}: EventsListPageProps): JSX.Element {
  return (
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <PostList eventList={allEvents} />
      <SocialLinks />
    </main>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<EventsListPageProps>
> {
  const response = await cachedGetAllPastEvents();
  return {
    props: {
      allEvents: response,
    },
    revalidate: 1,
  };
}
