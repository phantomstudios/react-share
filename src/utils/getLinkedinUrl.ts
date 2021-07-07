import { BaseShareProps } from "../types";
import objectToUrlParams from "./objectToUrlParams";

export interface LinkedinProps extends BaseShareProps {
  /** Title value to show in card. */
  title?: string;

  /** Description to show in card. */
  summary?: string;

  /** Source of the content (for example... your website or application name). */
  source?: string;
}

const getLinkedinUrl = ({ url, title, summary, source }: LinkedinProps) =>
  `https://linkedin.com/shareArticle${objectToUrlParams({
    url,
    mini: "true",
    title,
    summary,
    source,
  })}`;

export default getLinkedinUrl;
