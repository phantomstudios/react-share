import React from "react";

export interface TwitterEmbedProps {
  /** Summary card type. */
  useLargeCard?: boolean;

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
   * Image to show in card. _Should_ only be used if image is different to
   * `MetaHeadEmbed` image.
   *
   * Should be different based on `useLargeCard`:
   *  - For large cards, use a 2:1 aspect ratio (300x157 px minium or
   *     4096x4096 px maximum).
   *  - For small cards, use a 1:1 aspect ratio (144x144 px minium or
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
  useLargeCard = false,
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
      content={useLargeCard ? "summary_large_image" : "summary"}
    />
    <meta name="twitter:title" content={title} />
    {siteUsername && <meta name="twitter:site" content={siteUsername} />}
    {creatorUsername && (
      <meta name="twitter:creator" content={creatorUsername} />
    )}
    {description && <meta name="twitter:description" content={description} />}
    {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
  </>
);

export default TwitterHeadEmbed;
