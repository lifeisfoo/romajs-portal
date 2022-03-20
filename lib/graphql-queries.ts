export const MeetupArticleLead = `
fragment MeetupArticleLead on Event{
  id
  title
  dateTime
  images {
    id
    baseUrl
  }  
}
`
export const MeetupArticle = `
fragment MeetupArticle on Event{
  title
  eventUrl
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
`
export const ALL_POSTS_QUERY = `
${MeetupArticleLead}
query ($urlname: String!) {
  groupByUrlname(urlname: $urlname) {
    id
    name
    pastEvents(input: {first: 1}) {
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
    upcomingEvents(input: {first: 3}) {
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
}`

export const EVENT_BY_EVENTID = `
${MeetupArticle}
query($eventId: ID!) {
  event(id: $eventId){
    ...MeetupArticle
  }
}
`;