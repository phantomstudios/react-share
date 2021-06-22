import objectToUrlParams from "./objectToUrlParams";

export const getTwitterUrl = (
  url: string,
  text?: string,
  hashtags?: string[],
  related?: string[]
) =>
  `https://twitter.com/share${objectToUrlParams({
    url,
    text,
    hashtags: hashtags?.join(","),
    related: related?.join(","),
  })}`;
