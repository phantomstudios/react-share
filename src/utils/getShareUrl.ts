import { SocialPlatforms } from "../types";
import getFacebookUrl, { FacebookProps } from "./getFacebookUrl";
import getLinkedinUrl, { LinkedinProps } from "./getLinkedinUrl";
import getTwitterUrl, { TwitterProps } from "./getTwitterUrl";

interface AllProps extends FacebookProps, LinkedinProps, TwitterProps {}

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
  }: AllProps
) => {
  switch (socialPlatform) {
    case SocialPlatforms.Facebook:
      return getFacebookUrl({ url, quote, hashtag });

    case SocialPlatforms.Linkedin:
      return getLinkedinUrl({ url, title, summary, source });

    case SocialPlatforms.Twitter:
      return getTwitterUrl({ url, text, hashtags, related });
  }
};

export default getShareUrl;
