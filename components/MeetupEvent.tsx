/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MeetupEventType } from "../types";

export default function MeetupEvent({
  event,
}: {
  event: MeetupEventType;
}): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _numberOfPartecipants = event.tickets.edges.length;
  const meetupDate = new Date(event.dateTime);
  return (
    <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
      <div className="mr-2 md:mr-4 ml-2">
        <div className="pb-10">
          <div>
            <img
              className="article-image"
              src={event.imageUrl}
              alt={event.title}
            />
            <h2 className="text-gray-900 font-serif text-3xl my-5 font-thin">
              {event.title}
            </h2>
            <span className="text-xs text-gray-800 font-thin block mb-5">
              {meetupDate.toLocaleDateString()} -{" "}
              {meetupDate.toLocaleTimeString()}
            </span>
            <div className="article-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {event.description}
              </ReactMarkdown>
            </div>
            <a
              href={event.eventUrl}
              target="_blank"
              className="readmore"
              rel="noreferrer"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
