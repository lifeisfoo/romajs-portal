import { MeetupEventType } from "../types";
import MeetupEventLead from "./MeetupEventLead";

export default function PostList({ eventList }): JSX.Element {
  return (
    <div className="article-row md:w-4/6 lg:w-4/6 xl:w-4/6">
      {eventList.map((post: MeetupEventType) => (
        <MeetupEventLead event={post} key={post.id} />
      ))}
    </div>
  );
}
