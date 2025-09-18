import { useState } from "react";

export const useEllipsis = (text = "", maxLength = 150) => {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;

  const displayed =
    !shouldTruncate || expanded ? text : text.slice(0, maxLength) + "...";

  return {
    displayed,
    expanded,
    toggle: () => setExpanded(!expanded),
    canToggle: shouldTruncate,
  };
};
