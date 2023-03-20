import objectToUrlParams from "./objectToUrlParams";
import { BaseShareProps } from "../types";

export interface FacebookProps extends BaseShareProps {
  /** Hashtag to show in Facebook card. */
  hashtag?: string;
}

export const getFacebookUrl = ({
  url,
  hashtag: suppliedHashtag,
}: FacebookProps) => {
  let hashtag = suppliedHashtag;
  if (hashtag && hashtag.charAt(0) !== "#") hashtag = `#${hashtag}`;
  return `https://www.facebook.com/sharer/sharer.php${objectToUrlParams({
    u: url,
    hashtag,
  })}`;
};

export default getFacebookUrl;
