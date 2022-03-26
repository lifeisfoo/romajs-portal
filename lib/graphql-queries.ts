export const MeetupArticleLead = `
fragment MeetupArticleLead on Event{
  id
  title
  dateTime
  shortDescription
  eventUrl
}
`;
export const MeetupArticle = `
fragment MeetupArticle on Event{
  id
  title
  eventUrl
  imageUrl
  description
  dateTime
  duration
  host {
    id
    name
  }
  images {
    id
    baseUrl
    preview
  }
  group {
    id
    name
    urlname
  }
  tickets {
    edges {
      node {
        id
        user {
          name
        }
        createdAt
      }
      cursor
    }
  }
}
`;
export const ALL_POSTS_QUERY = `
${MeetupArticleLead}
query ($urlname: String!) {
  allEvents: groupByUrlname(urlname: $urlname) {
    pastEvents(input: {first: 55}, sortOrder:DESC) {
      count
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
    ...MeetupArticleLead
        }
      }
    }
    upcomingEvents(input: {first: 1}) {
      count
      pageInfo {
        endCursor
      }
      edges {
        node {
    ...MeetupArticleLead
        }
      }
    }
  }
}`;

export const PAST_EVENT_QUERY = `
${MeetupArticle}
query ($urlname: String!,$itemsNum: Int!) {
  groupByUrlname(urlname: $urlname) {   
    pastEvents(input: {first: $itemsNum},sortOrder:DESC) {
      edges {
        node {
        ...MeetupArticle
        }
      }
    }
  }
}`;

export const LAST_UPCOMING_EVENT_QUERY = `
${MeetupArticle}
query ($urlname: String!) {
  groupByUrlname(urlname: $urlname) {   
    # upcomingEvents(input: {first: 1},sortOrder:DESC) {
     upcomingEvents: pastEvents(input: {first: 1},sortOrder:DESC) {
      edges {
        node {
        ...MeetupArticle
        }
      }
    }
  }
}`;

export const EVENT_BY_EVENTID = `
${MeetupArticle}
query($eventId: ID) {
  event(id: $eventId) {
    ...MeetupArticle
  }
}
`;

export const LAST_MEETUP_COUNT = `
query ($urlname: String!) {
  groupByUrlname(urlname: $urlname) {
    pastEvents(input: {}) {
        count
    }
  }
}`;
