import Link from "next/link";

export default function Menu(): JSX.Element {
  return (
    <header className="max-w-5xl mx-auto pt-5">
      <div className="flex flex-wrap -mx-2 overflow-hidden px-5 lg:px-2 my-2">
        <div className="px-2 w-full overflow-hidden md:w-1/6 lg:w-1/3 xl:w-1/3 text-center md:text-left"></div>

        <nav className="my-2 px-2 w-full overflow-hidden md:w-3/6 lg:w-1/3 xl:w-1/3 text-center md:text-left">
          <ul>
            <li className="inline-block">
              <Link href="/">
                <a className="block font-semibold px-3">Home</a>
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/events">
                <a className="block font-semibold px-3">Events</a>
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/about">
                <a className="block font-semibold px-3">About</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="my-2 px-2 w-full overflow-hidden md:w-2/6 lg:w-1/3 xl:w-1/3 text-center md:text-right"></div>
      </div>
    </header>
  );
}
