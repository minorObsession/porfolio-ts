import { useEffect } from "react";

export function useDisableScrollBasedOnCondition(condition: boolean) {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
      // document.body.style.overflow = "auto";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [condition]);

  if (!condition) return null;

  return;
}
