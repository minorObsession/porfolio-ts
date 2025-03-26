import { useEffect } from "react";
interface stickyHeaderProps {
  elementToObserve: HTMLElement | null;
  setStateFn?: React.Dispatch<React.SetStateAction<boolean>>;
}
export function useStickyHeader({
  elementToObserve,
  setStateFn,
}: stickyHeaderProps) {
  useEffect(() => {
    if (!elementToObserve) {
      console.log("exiting observer...");
      return;
    }

    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting);

        // ! if target is NOT in view
        if (!entry.isIntersecting && setStateFn) {
          // ! change state for target in view
          setStateFn(false);
        }
        // ! if landing page is in view
        else if (entry.isIntersecting && setStateFn) {
          setStateFn(true);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(elementToObserve);

    return () => {
      observer.unobserve(elementToObserve);
      observer.disconnect();
    };
  }, [elementToObserve, setStateFn]);
}
