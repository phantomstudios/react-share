const fallbackCopyToClipboard = (url: string) => {
  const placeholder = document.createElement("textarea");
  placeholder.value = url;

  // Avoid scrolling to bottom
  placeholder.style.top = "0";
  placeholder.style.left = "0";
  placeholder.style.position = "fixed";

  // Append element, and focus
  document.body.appendChild(placeholder);
  placeholder.focus();
  placeholder.select();

  // Finally, remove element after copy
  document.body.removeChild(placeholder);
};

export const getCurrentUrlAndCopyToClipboard = () => {
  const url = window.location.href;
  if (!navigator.clipboard) fallbackCopyToClipboard(url);
  else navigator.clipboard.writeText(url);
  return url;
};

export default getCurrentUrlAndCopyToClipboard;
