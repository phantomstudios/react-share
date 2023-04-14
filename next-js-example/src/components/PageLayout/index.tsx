import Head from 'next/head';
import { MetaHeadEmbed } from "@phntms/react-share";

interface Props {
  children: React.ReactNode;
}

const PageLayout = ({children}: Props) => (
  <>
    <MetaHeadEmbed
      render={(meta: React.ReactNode) => <Head>{meta}</Head>}
      siteTitle="PHANTOM"
      pageTitle="Our Work"
      titleTemplate="[pageTitle] | [siteTitle]"
      description="Transforming challenges of all shapes and sizes into inventive, engaging and performance driven solutions that change the game."
      baseSiteUrl="https://phantom.land"
      pagePath="work"
      keywords={["creative-agency", "phantom", "work"]}
      imageUrl="https://bit.ly/3wiUOuk"
      imageAlt="PHANTOM logo."
      twitter={{
        cardSize: "large",
        siteUsername: "@phntmLDN",
        creatorUsername: "@phntmLDN",
      }}
    />
    {children}
  </>
);

export default PageLayout;
