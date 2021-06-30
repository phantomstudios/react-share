import React from "react";

export interface TwitterEmbedProps {
  /** Summary card type. */
  cardSize: "regular" | "large";

  /** A concise title for the related content. */
  title: string;

  /** The Twitter @username the card should be attributed to. */
  siteUsername?: string;

  /** The Twitter @username for the content creator / author. */
  creatorUsername?: string;

  /**
   * A description that concisely summarizes the content as appropriate for
   * presentation within a Tweet. Should not be the same as title.
   */
  description?: string;

  /**
   * Image to show in card. Should be different based on `cardSize`:
   *  - For `large` cards, use a 2:1 aspect ratio (300x157 px minium or
   *     4096x4096 px maximum).
   *  - For `regular` cards, use a 1:1 aspect ratio (144x144 px minium or
   *     4096x4096 px maximum).
   *
   * Images must be less than 5MB in size.
   *
   * Supported file types; JPG, PNG, WEBP and GIF.
   *
   * Note: Only the first frame of an animated GIF will be used.
   */
  imageUrl?: string;

  /** Image alt for users who are visually impaired. Maximum 420 characters. */
  imageAlt?: string;
}

const TwitterHeadEmbed = ({
  cardSize = "large",
  title,
  siteUsername,
  creatorUsername,
  description,
  imageUrl,
  imageAlt,
}: TwitterEmbedProps) => (
  <>
    <meta
      name="twitter:card"
      content={cardSize === "large" ? "summary_large_image" : "summary"}
    />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:site" content={siteUsername} />
    <meta name="twitter:creator" content={creatorUsername} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:image:alt" content={imageAlt} />
  </>
);

export default TwitterHeadEmbed;
