import { useState } from "react";
import { useQuery } from "graphql-hooks";
import ErrorMessage from "./error-message";
import MeetupEvent from "./MeetupEvent";

export const GROUP_ID = "RomaJS";
export const TARGET_EVENT_ID = 284329693;

export const ALL_POSTS_QUERY = `
query($eventId: ID!) {
  event(id: $eventId) {
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
}
`;

export const allPostsQueryOptions = (eventId) => ({
  variables: { eventId },
  updateData: (prevResult, result) => ({
    ...result,
    allPosts: prevResult
      ? [...prevResult.allPosts, ...result.allPosts]
      : result.allPosts,
  }),
});

export default function PostList() {
  const [skip, setSkip] = useState(0);
  const { loading, error, data, refetch } = useQuery(
    ALL_POSTS_QUERY,
    allPostsQueryOptions(TARGET_EVENT_ID)
  );

  if (error) return <ErrorMessage message="Error loading posts." />;
  if (!data) return <div>Loading</div>;

  const { event } = data;
  const allPosts = [event, event];
  const areMorePosts = false;

  if (!allPosts) {
    return <div>daino</div>;
  }

  return (
    <section>
      <ul>
        {allPosts.map((post) => (
          <MeetupEvent event={post} />
        ))}
      </ul>
      {areMorePosts ? (
        <button className="more" onClick={() => setSkip(skip + 10)}>
          {" "}
          {loading && !data ? "Loading..." : "Show More"}{" "}
        </button>
      ) : (
        ""
      )}
    </section>
  );
}
