interface UrlDataProps {
  [key: string]: string | number | undefined | null;
}

export default function objectToUrlParams(data: UrlDataProps) {
  const params = Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    );

  return params.length ? `?${params.join("&")}` : "";
}
