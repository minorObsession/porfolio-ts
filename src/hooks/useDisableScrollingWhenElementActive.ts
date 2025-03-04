import { useEffect } from "react";

export function useDisableScrollBasedOnCondition(condition: boolean) {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [condition]);

  if (!condition) return null;

  return;
}
