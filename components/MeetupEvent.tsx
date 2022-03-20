import { MeetupEventType } from "../types";
import SocialLinks from "./SocialLinks";

export default function MeetupEvent({ event }: { event: MeetupEventType }) {
console.log(event.description)
  return (
    <li key={event.id}>
      <div className="card">
        <div className="container">
          <h3>{event.title}</h3>
        </div>
        <img
          src={event.imageUrl}
          alt="Avatar"
        />
        <p>{event.shortDescription}</p>
      </div>
      <style jsx>{`
        .card {
          /* Add shadows to create the "card" effect */
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          flex-direction: column;
        }

        /* On mouse-over, add a deeper shadow */
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        /* Add some padding inside the card container */
        .container {
          padding: 2px 16px;
        }
      `}</style>
    </li>
  );
}
