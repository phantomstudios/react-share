const fallbackCopyToClipboard = (text: string) => {
  const placeholder = document.createElement("textarea");
  placeholder.value = text;

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

export const copyToClipboard = (text: string) => {
  if (!navigator.clipboard) fallbackCopyToClipboard(text);
  else navigator.clipboard.writeText(text);
};

export default copyToClipboard;
