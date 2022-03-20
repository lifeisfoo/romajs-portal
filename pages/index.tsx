import { GraphQLClient } from "../lib/graphql-client";
import Header from "../components/Header";
import SocialLinks from "../components/SocialLinks";
import { LAST_UPCOMING_EVENT_QUERY } from "../lib/graphql-queries";
import { GROUP_ID } from "../lib/config";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <div>
          <h1>RomaJS</h1>
          <p>
            A javascript group meeting in Rome every third Wednesday of the
            month.
          </p>
          <p>
            Follow our Tech Newsletter:{" "}
            <a
              href="http://romajs.us14.list-manage.com/subscribe?u=6cb1a45522d1c092d11e144ae&id=1465710629"
              title="RomaJS Tech Newsletter subscription link"
            >
              Subscribe now
            </a>
            !
          </p>
        </div>
      </div>
      <SocialLinks />
    </>
  );
}

export async function getStaticProps(context) {
  const response = await GraphQLClient(LAST_UPCOMING_EVENT_QUERY, {
    urlname: GROUP_ID,
  });
  const { data } = response;
  const { allEvents } = data;

  return {
    props: {
      allEvents,
    },
    revalidate: 1,
  };
}
