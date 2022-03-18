import { MeetupEventType } from "../types";
import SocialLinks from "./SocialLinks";

export default function MeetupEvent({ event }: { event: MeetupEventType }) {
  const eventImage = event.images[0];
  return (
    <li key={event.id}>
      <div className="card">
        <div className="container">
          <h2>{event.title}</h2>
          <h5>Architect & Engineer</h5>
        </div>
        <img
          src={`${eventImage.baseUrl}/${eventImage.id}/676x380.webp`}
          alt="Avatar"
        />
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
