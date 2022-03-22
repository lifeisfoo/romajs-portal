/* eslint-disable @next/next/no-img-element */

export default function About() {
  return (
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <div className="mt-20 sm:mt-0 text-center">
        <img
          className="w-64 h-64 rounded-full mx-auto"
          src="/logo.jpg"
          alt=""
          height={200}
          width={200}
        />
        <h2 className="font-light text-xl my-5">RomaJS</h2>
        <p className="article-body max-w-lg mx-auto">
          {" "}
          - The RomaJS group was{" "}
          <strong>
            founded by{" "}
            <a href="https://twitter.com/gillesruppert">Gilles Ruppert</a>
          </strong>{" "}
          back in 2013.
        </p>
        <p>
          It is a JavaScript User Group based in the city of Roma, Italia. We
          discuss and have meetups about JavaScript: server-side, client-side,
          mobile, HTML5. Anything related JS.
        </p>
        <p>
          <strong>
            We meet every third Wednesday of the month and we coordinate the
            meeting using the <a href="http://www.meetup.com/RomaJS/">meetup</a>{" "}
            platform
          </strong>
          . Everyone is more than welcome to come to our meeting, we ask you to
          RSVP just to be sure we will have enough space.
        </p>
        <p>
          During the last years various people have helped keeping the group
          running:
        </p>
        <ul>
          <li>
            <a href="https://twitter.com/matteomanchi">Matteo Manchi</a>
          </li>
          <li>
            <a href="https://twitter.com/gabrielem/">Gabriele Marazzi</a>
          </li>
          <li>
            <a href="https://twitter.com/lucalanziani">Luca Lanziani</a>
          </li>
        </ul>
        <p>
          You can have some taste of our meeting on our official youtube{" "}
          <a href="https://www.youtube.com/channel/UCFm8OPi5USbFybw9SaTLxeA">
            channel
          </a>
          .
        </p>
        <p>
          For further questions you can contact us using one of our social
          network profiles.
        </p>
      </div>
    </main>
  );
}
