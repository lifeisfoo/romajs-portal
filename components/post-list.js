import { useState } from "react";
import { useQuery } from "graphql-hooks";
import ErrorMessage from "./error-message";
import MeetupEvent from "./MeetupEvent";
import {ALL_POSTS_QUERY} from "../lib/graphql-queries"
export const GROUP_ID = "RomaJS";
export const TARGET_EVENT_ID = 284329693;

export const allPostsQueryOptions = (urlname) => ({
  variables: { urlname },
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
    allPostsQueryOptions(GROUP_ID)
  );
  if (error) return <ErrorMessage message="Error loading posts." />;
  if (!data) return <div>Loading</div>;
  
  console.log(data)
  const { groupByUrlname:{pastEvents,upcomingEvents} } = data;
  const allPosts = [];
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
