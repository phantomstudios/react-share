import { MetaHeadEmbed } from "@phntms/react-share";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <MetaHeadEmbed
        render={(meta: React.ReactNode) => <Head>{meta}</Head>}
        siteTitle="PHANTOM"
        pageTitle="Test Subroute Meta"
        description="subroute test"
        baseSiteUrl={"test"}
      />
      <main>
        <h1>Subroute Example</h1>
      </main>
    </>
  );
}
