import { BaseShareProps } from "../types";
import objectToUrlParams from "./objectToUrlParams";

export interface TwitterProps extends BaseShareProps {
  /** Text to show in card. */
  text?: string;

  /** Hashtags to show in Twitter card. */
  hashtags?: string[];

  /** Accounts to recommend following. */
  related?: string[];
}

export const getTwitterUrl = ({ url, text, hashtags, related }: TwitterProps) =>
  `https://twitter.com/share${objectToUrlParams({
    url,
    text,
    hashtags: hashtags?.join(","),
    related: related?.join(","),
  })}`;

export default getTwitterUrl;
