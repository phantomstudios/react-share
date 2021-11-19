import React from "react";

import isAbsoluteUrl from "is-absolute-url";

import { commaSeparate } from "../utils";

export interface TwitterEmbedProps {
  /** Summary card size. */
  cardSize: "small" | "large";

  /** A concise title for the related content. */
  title?: string;

  /**
   * A description that concisely summarizes the content as appropriate for
   * presentation within a Tweet. Should not be the same as title.
   */
  description?: string;

  /** The Twitter @username the card should be attributed to. */
  siteUsername?: string;

  /** The Twitter @username for the content creator / author. */
  creatorUsername?: string;

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

export interface MetaEmbedProps {
  /** Returns meta properties to be rendered. */
  render: (meta: React.ReactNode) => JSX.Element;

  /** Unique page title that describes the page, such as `Home`, `About` etc. */
  pageTitle?: string;

  /** Title of the site, usually the organization / brand name. */
  siteTitle: string;

  /**
   * Title template used to display `pageTitle` and `siteTitle` in a template.
   * Replaced `[pageTitle]` with `pageTitle` and `[siteTitle]` with `siteTitle`.
   *
   * Example template: `[pageTitle] | [siteTitle]`.
   */
  titleTemplate?: string;

  /** Webpage description. Should be less than 160 characters. */
  description: string;

  /** Canonical URL of your webpage that will be used as its default app URL. */
  canonicalUrl?: string;

  /** Base site URL, excluding trailing slash. */
  baseSiteUrl: string;

  /** The path of the page, excluding leading slash. */
  pagePath?: string;

  /**
   * List of SEO keywords describing what your webpage does.
   * Example: `"your, tags"` or `["your", "tags"]`.
   */
  keywords?: string | string[];

  /**
   * Image url of asset to share. Recommended aspect ratio for landscape is
   * 1.9:1 (1200x630) or for squares 1:1 (1200x1200).
   */
  imageUrl?: string;

  /**
   * Width of share image.
   */
  imageWidth?: number;

  /**
   * height of share image.
   */
  imageHeight?: number;

  /** Image alt for users who are visually impaired. */
  imageAlt: string;

  /**
   * The locale these tags are marked up in, such as; `en_GB`,
   * `fr_FR` and `es_ES`.
   *
   * Defaults to `en_US`.
   */
  locale?: string;

  /** Twitter embed properties */
  twitter?: TwitterEmbedProps;
}

const MetaHeadEmbed = ({
  render,
  pageTitle,
  siteTitle,
  titleTemplate,
  description,
  canonicalUrl,
  baseSiteUrl,
  pagePath,
  keywords,
  imageUrl,
  imageAlt,
  imageWidth = 1200,
  imageHeight = 630,
  locale = "en_US",
  twitter,
}: MetaEmbedProps) => {
  let title = siteTitle;
  if (titleTemplate && pageTitle && pageTitle !== siteTitle) {
    title = titleTemplate
      .replace("[pageTitle]", pageTitle)
      .replace("[siteTitle]", siteTitle);
  }

  const canonical =
    canonicalUrl &&
    (isAbsoluteUrl(canonicalUrl)
      ? canonicalUrl
      : `${baseSiteUrl}/${canonicalUrl}`);

  const pageUrl = pagePath ? `${baseSiteUrl}/${pagePath}` : baseSiteUrl;

  const image =
    imageUrl &&
    (isAbsoluteUrl(imageUrl) ? imageUrl : `${baseSiteUrl}/${imageUrl}`);

  const metaEmbed = [
    <title key="title">{title}</title>,
    <meta key="meta:title" name="title" content={title} />,
    <meta key="meta:description" name="description" content={description} />,
    keywords && (
      <meta
        key="meta:keywords"
        name="keywords"
        content={commaSeparate(keywords)}
      />
    ),
    canonicalUrl && <link key="canonical" rel="canonical" href={canonical} />,

    <meta key="og:type" property="og:type" content="website" />,
    <meta key="og:url" property="og:url" content={pageUrl} />,
    <meta key="og:title" property="og:title" content={title} />,
    <meta
      key="og:description"
      property="og:description"
      content={description}
    />,
    <meta key="og:image" property="og:image" content={image} />,
    <meta
      key="og:image:width"
      property="og:image:width"
      content={imageWidth.toString()}
    />,
    <meta
      key="og:image:height"
      property="og:image:height"
      content={imageHeight.toString()}
    />,
    <meta key="og:image:alt" property="og:image:alt" content={imageAlt} />,
    <meta key="og:site_name" property="og:site_name" content={siteTitle} />,
    <meta key="og:locale" property="og:locale" content={locale} />,
  ];

  const twitterEmbed = ({
    cardSize,
    title,
    description,
    siteUsername,
    creatorUsername,
    imageUrl,
    imageAlt,
  }: TwitterEmbedProps) => [
    <meta
      key="twitter:card"
      name="twitter:card"
      content={cardSize === "large" ? "summary_large_image" : "summary"}
    />,
    title && <meta key="twitter:title" name="twitter:title" content={title} />,
    description && (
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
    ),
    siteUsername && (
      <meta key="twitter:site" name="twitter:site" content={siteUsername} />
    ),
    creatorUsername && (
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={creatorUsername}
      />
    ),
    imageUrl && (
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
    ),
    imageAlt && (
      <meta key="twitter:alt" name="twitter:image:alt" content={imageAlt} />
    ),
  ];

  return render([metaEmbed, twitter && twitterEmbed({ ...twitter })]);
};

export default MetaHeadEmbed;
