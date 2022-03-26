import type { AppProps } from "next/app";
import { Menu } from "../components";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}
