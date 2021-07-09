import { BaseShareProps } from "../types";
import { commaSeparate } from "../utils";
import objectToUrlParams from "./objectToUrlParams";

export interface TwitterProps extends BaseShareProps {
  /** Text to show in card. */
  text?: string;

  /** Hashtags to show in Twitter card. */
  hashtags?: string | string[];

  /** Accounts to recommend following. */
  related?: string | string[];
}

export const getTwitterUrl = ({ url, text, hashtags, related }: TwitterProps) =>
  `https://twitter.com/share${objectToUrlParams({
    url,
    text,
    hashtags: commaSeparate(hashtags),
    related: commaSeparate(related),
  })}`;

export default getTwitterUrl;
