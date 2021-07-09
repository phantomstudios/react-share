import { BaseShareProps } from "../types";
import objectToUrlParams from "./objectToUrlParams";

export interface FacebookProps extends BaseShareProps {
  /** Quote to show in Facebook card. */
  quote?: string;

  /** Hashtag to show in Facebook card. */
  hashtag?: string;
}

export const getFacebookUrl = ({ url, quote, hashtag }: FacebookProps) =>
  `https://www.facebook.com/sharer/sharer.php${objectToUrlParams({
    u: url,
    quote,
    hashtag: hashtag?.charAt(0) === "#" ? hashtag : `#${hashtag}`,
  })}`;

export default getFacebookUrl;
