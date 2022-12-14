import Head from "next/head";

import Brand from "../components/molecules/brand";
import Navbar from "../components/molecules/navbar";

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>beatnyk | Home</title>
        <meta name="description" content="Sound Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <Navbar />
        <Brand />
      </main>

      <footer className={"footer"}></footer>
    </div>
  );
}
