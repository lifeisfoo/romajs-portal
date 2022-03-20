import { MeetupEventType } from "../types";

export default function MeetupEventLead({ event }: { event: MeetupEventType }) {
  return (
    <li key={event.id}>
      <a href={event.eventUrl} target="_blank">
        <div>
          <div>
            <h1 className="text-3l font-bold underline">{event.title}</h1>
          </div>
          <p>{event.shortDescription}</p>
        </div>
      </a>
    </li>
  );
}
