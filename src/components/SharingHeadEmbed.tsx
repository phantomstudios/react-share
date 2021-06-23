import React from "react";

export interface MetaEmbedProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonicalUrl?: string;
  imageUrl?: string;
  excludeTwitter?: boolean;
}

const SharingHeadEmbed = ({
  title,
  description,
  keywords,
  canonicalUrl,
  imageUrl,
  excludeTwitter = false,
}: MetaEmbedProps) => {
  const joinedKeywords =
    typeof keywords === "string" ? keywords : keywords?.join(", ");

  const base = (
    <>
      <meta charSet="utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={joinedKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
    </>
  );

  const twitter = (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={imageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );

  if (!excludeTwitter) return [base, twitter];
  else return base;
};

export default SharingHeadEmbed;
