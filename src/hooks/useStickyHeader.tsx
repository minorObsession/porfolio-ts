import { useEffect } from "react";

export function useStickyHeader(
  setIsLandingInView: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    // ! change element if needed
    const landingPageEl = document.getElementById("landing");

    if (!landingPageEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsLandingInView(false);
          } else {
            setIsLandingInView(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 0,
      }
    );

    observer.observe(landingPageEl);

    return () => {
      observer.disconnect();
    };
  }, [setIsLandingInView]);
}

// usage:
// ! in component
// const [isLandingInView, setIsLandingInView] = useState(true);
//   useStickyHeader(setIsLandingInView);
