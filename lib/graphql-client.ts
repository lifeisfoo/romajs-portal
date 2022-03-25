import { MeetupEventType } from "../types";
import {
  EVENT_BY_EVENTID,
  LAST_MEETUP_COUNT,
  LAST_UPCOMING_EVENT_QUERY,
  PAST_EVENT_QUERY,
} from "./graphql-queries";

export async function GraphQLClient(
  query: string,
  variables: { [key: string]: any }
): Promise<any> {
  const finalQuery = JSON.stringify({
    query,
    variables,
  });
  //console.log(finalQuery);
  const res = await fetch(process.env.MEETUP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: finalQuery,
  });
  const json = await res.json();

  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getMeetupsCount(): Promise<number> {
  const response = await GraphQLClient(LAST_MEETUP_COUNT, {
    urlname: process.env.MEETUP_GROUP_ID,
  });
  const {
    groupByUrlname: {
      pastEvents: { count },
    },
  } = response;
  return count;
}
export async function getLastUpcomingEvent(): Promise<MeetupEventType> {
  const response = await GraphQLClient(LAST_UPCOMING_EVENT_QUERY, {
    urlname: process.env.MEETUP_GROUP_ID,
  });
  const {
    groupByUrlname: {
      upcomingEvents: { edges },
    },
  } = response;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [last, ...others] = edges;
  const { node: event } = last || { node: null };
  return event;
}

export async function getAllPastEvents(): Promise<MeetupEventType[]> {
  const itemsNum = await getMeetupsCount();
  const response = await GraphQLClient(PAST_EVENT_QUERY, {
    urlname: process.env.MEETUP_GROUP_ID,
    itemsNum,
  });
  const {
    groupByUrlname: {
      pastEvents: { edges },
    },
  } = response;

  return edges.map((eventElement) => ({
    ...eventElement.node,
    id: eventElement.node.id.replace("!chp", ""),
  }));
}

export async function getEvent(eventID: string): Promise<MeetupEventType> {
  const response = await GraphQLClient(EVENT_BY_EVENTID, {
    eventId: eventID,
  });
  const { event } = response;
  return event;
}
