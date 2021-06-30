import React from "react";

export interface MetaEmbedProps {
  pageTitle: string;
  siteTitle: string;
  titleTemplate?: string;
  description: string;
  keywords: string | string[];
  canonicalUrl: string;
  imageUrl: string;
  excludeTwitter?: boolean;
}

const SharingHeadEmbed = ({
  pageTitle,
  siteTitle,
  titleTemplate,
  description,
  keywords,
  canonicalUrl,
  imageUrl,
  excludeTwitter = false,
}: MetaEmbedProps) => {
  const joinedKeywords =
    typeof keywords === "string" ? keywords : keywords?.join(", ");

  const title = titleTemplate
    ? titleTemplate
        .replace("[PAGE_TITLE]", pageTitle)
        .replace("[SITE_TITLE]", siteTitle)
    : pageTitle;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={joinedKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {!excludeTwitter && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={imageUrl} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </>
      )}
    </>
  );
};

export default SharingHeadEmbed;
