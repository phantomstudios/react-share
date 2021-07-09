export const commaSeparate = (words?: string | string[]) =>
  typeof words === "string" ? words : words?.join(",");
