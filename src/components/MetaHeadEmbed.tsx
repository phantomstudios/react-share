import React from "react";

import isAbsoluteUrl from "is-absolute-url";

export interface MetaEmbedProps {
  /** Unique page title that describes the page, such as `Home`, `About` etc. */
  pageTitle: string;

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

  /** Url base url of the site, excluding trailing slash. */
  siteBaseUrl: string;

  /** The path of the page, excluding leading slash. */
  pagePath?: string;

  /**
   * List of SEO keywords describing what your webpage does.
   * For example, `"your, tags"` or `["your", "tags"]`.
   */
  keywords: string | string[];

  /**
   * Image url of asset to share. Recommended aspect ratio for landscape is
   * 1.9:1 (1200x630) or for squares 1:1 (1200x1200).
   */
  imageUrl: string;

  /** Image alt for users who are visually impaired. */
  imageAlt: string;

  /**
   * The locale these tags are marked up in, such as; `en_GB`,
   * `fr_FR` and `es_ES`.
   *
   * Defaults to `en_US`.
   */
  locale?: string;
}

const MetaHeadEmbed = ({
  pageTitle,
  siteTitle,
  titleTemplate,
  description,
  canonicalUrl,
  siteBaseUrl,
  pagePath,
  keywords,
  imageUrl,
  imageAlt,
  locale = "en_US",
}: MetaEmbedProps) => {
  const joinedKeywords =
    typeof keywords === "string" ? keywords : keywords?.join(", ");

  const title = titleTemplate
    ? titleTemplate
        .replace("[pageTitle]", pageTitle)
        .replace("[siteTitle]", siteTitle)
    : pageTitle;

  const canonical =
    canonicalUrl &&
    (isAbsoluteUrl(canonicalUrl)
      ? canonicalUrl
      : `${siteBaseUrl}/${canonicalUrl}`);

  const pageUrl = pagePath ? `${siteBaseUrl}/${pagePath}` : siteBaseUrl;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={joinedKeywords} />
      {canonicalUrl && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={locale} />
    </>
  );
};

export default MetaHeadEmbed;
