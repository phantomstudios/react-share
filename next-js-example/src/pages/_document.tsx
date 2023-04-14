import PageLayout from "@/components/PageLayout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <PageLayout>
        <body>
          <Main />
          <NextScript />
        </body>
      </PageLayout>
    </Html>
  );
}
