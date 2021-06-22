import React from "react";

import TestRenderer from "react-test-renderer";

import { MetaEmbedProps, SharingHeadEmbed, getTwitterUrl } from "../src";

const URL = "https://www.npmjs.com/package/@phntms/react-share";
const TEXT = "I just installed @phntms/react-share and loved it!";

const META: MetaEmbedProps = {
  title: "@phntms/react-share",
  description: "all-in-one",
  keywords: ["metadata", "share", "social-media", "sharing", "opengraph"],
  canonicalUrl: URL,
  imageUrl: "?",
};

describe("<SharingHeadEmbed />", () => {
  it("renders component with all meta properties", async () => {
    const renderer = TestRenderer.create(<SharingHeadEmbed {...META} />);
    // expect(JSON.stringify(renderer.toJSON()).includes(META).toBe(true);
  });

  it("doesn't render twitter meta if not included", async () => {
    const renderer = TestRenderer.create(
      <SharingHeadEmbed {...META} includeTwitter />
    );
    // expect(renderer.toJSON()).toEqual(null);
  });
});

describe("shareUrls.ts", () => {
  it("getTwitterUrl()", async () => {
    const url = getTwitterUrl(URL, TEXT);
    // expect(url).toEqual(...);
  });
});
