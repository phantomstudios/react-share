import React from "react";

export interface MetaEmbedProps {
  /** Unique page title that describes the page, such as `Home`, `About` etc. */
  pageTitle: string;

  /** Name of the site. */
  siteName: string;

  /**
   * Title template used to display `pageTitle` and `siteName` in a template.
   * Replaced `[PAGE_TITLE]` with `pageTitle` and `[SITE_NAME]` with `siteName`.
   *
   * Example template: `[PAGE_TITLE] | [SITE_NAME]`.
   */
  titleTemplate?: string;

  /** Webpage description. Should be less than 160 characters. */
  description: string;

  /** Url of site page being shared. */
  url: string;

  /**
   * List of SEO keywords describing what your webpage does.
   * For example, `"your, tags"` or `["your", "tags"]`.
   */
  keywords: string | string[];

  /** Canonical URL of your webpage that will be used as its default app URL. */
  canonicalUrl: string;

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
  locale: string;
}

const MetaHeadEmbed = ({
  pageTitle,
  siteName,
  titleTemplate,
  description,
  url,
  keywords,
  canonicalUrl,
  imageUrl,
  imageAlt,
  locale = "en_US",
}: MetaEmbedProps) => {
  const joinedKeywords =
    typeof keywords === "string" ? keywords : keywords?.join(", ");

  const title = titleTemplate
    ? titleTemplate
        .replace("[PAGE_TITLE]", pageTitle)
        .replace("[SITE_NAME]", siteName)
    : pageTitle;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={joinedKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
    </>
  );
};

export default MetaHeadEmbed;