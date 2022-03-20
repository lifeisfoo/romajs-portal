import MeetupEventLead from "./MeetupEventLead";

export const allPostsQueryOptions = (urlname) => ({
  variables: { urlname },
  updateData: (prevResult, result) => ({
    ...result,
    allPosts: prevResult
      ? [...prevResult.allPosts, ...result.allPosts]
      : result.allPosts,
  }),
});

export default function PostList({ eventList }) {
  return (
    <section>
      <ul>
        {eventList.map((post) => (
          <MeetupEventLead event={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
}
