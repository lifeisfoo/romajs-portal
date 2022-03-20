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