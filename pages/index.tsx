import { SocialLinks, HomepageHero, MeetupEvent } from "../components";
import { getLastUpcomingEvent } from "../lib/graphql-client";

//Template cloned by https://github.com/naxeem/raalhu-blog

export default function Home({ upcomingEvent }) {
  return (
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <div className="flex flex-wrap overflow-hidden">
        {upcomingEvent && <MeetupEvent event={upcomingEvent} />}
        <div className="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
          {/* <!-- sidebar --> */}
        </div>
      </div>
      {!upcomingEvent && (
        <div className="text-center">
          <HomepageHero />
        </div>
      )}
      <div className="text-center">
        <SocialLinks />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const response = await getLastUpcomingEvent();

  return {
    props: {
      upcomingEvent: response,
    },
    revalidate: 1,
  };
}
