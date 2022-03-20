import { useState } from "react";

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

export default function PostList({eventList}) {

  return (
    <section>
      <ul>
        {eventList.map((post) => (
          <MeetupEvent event={post} key={post.id}/>
        ))}
      </ul>
    </section>
  );
}
