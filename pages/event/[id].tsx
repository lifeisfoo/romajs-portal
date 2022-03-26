import { GetStaticPropsResult, GetStaticPathsResult } from "next";
import { MeetupEvent } from "../../components";
import {
  cachedGetAllPastEvents,
  cachedGetEvent,
} from "../../lib/graphql-client";
import { MeetupEventType } from "../../types";

type EventPageProp = {
  event: MeetupEventType;
};
export default function EventPage({ event }: EventPageProp): JSX.Element {
  return (
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <MeetupEvent event={event} />
    </main>
  );
}
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await cachedGetAllPastEvents();
  return {
    paths: posts.map(({ id }) => ({
      params: { id },
    })),
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: { id: string };
}): Promise<GetStaticPropsResult<EventPageProp>> {
  const { id } = params;
  const response = await cachedGetEvent(id);
  return {
    props: {
      event: response,
    },
    revalidate: 1,
  };
}
