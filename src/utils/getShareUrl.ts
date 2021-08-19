import { SocialPlatforms } from "../types";
import getCurrentUrlAndCopyToClipboard from "./getCurrentUrlAndCopyToClipboard";
import getFacebookUrl, { FacebookProps } from "./getFacebookUrl";
import getLinkedinUrl, { LinkedinProps } from "./getLinkedinUrl";
import getTwitterUrl, { TwitterProps } from "./getTwitterUrl";
import getWhatsAppUrl, { WhatsAppProps } from "./getWhatsAppUrl";

export type AllSocialPlatformProps = FacebookProps &
  LinkedinProps &
  TwitterProps &
  WhatsAppProps;

export const getShareUrl = (
  socialPlatform: SocialPlatforms,
  {
    url,
    quote,
    hashtag,
    title,
    summary,
    source,
    text,
    hashtags,
    related,
  }: AllSocialPlatformProps
) => {
  switch (socialPlatform) {
    case SocialPlatforms.Facebook:
      return getFacebookUrl({ url, quote, hashtag });

    case SocialPlatforms.Linkedin:
      return getLinkedinUrl({ url, title, summary, source });

    case SocialPlatforms.Twitter:
      return getTwitterUrl({ url, text, hashtags, related });

    case SocialPlatforms.WhatsApp:
      return getWhatsAppUrl({ url, text });
  }
};

export default getShareUrl;
