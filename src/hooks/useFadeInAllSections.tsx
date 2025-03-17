import { useEffect } from "react";

export function useFadeInAllSections(): void {
  useEffect(() => {
    const allSections = [
      ...document.querySelectorAll("section"),
      document.querySelector("footer"),
    ].filter((el): el is HTMLElement => el !== null);

    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    allSections.forEach((section) => observer.observe(section));

    return () => {
      allSections.forEach((s) => observer.unobserve(s));
      observer.disconnect();
    };
  }, []);
}
