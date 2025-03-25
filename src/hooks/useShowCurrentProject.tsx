import { useEffect } from "react";

export function useDisplayCurrentlyVisibleCard(
  setHoveredCard: React.Dispatch<React.SetStateAction<boolean>>,
  cardId: string
): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isCardInViewport = entries.some((entry) => entry.isIntersecting);
        setHoveredCard(isCardInViewport);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    const cardElement = document.getElementById(cardId);
    if (cardElement) observer.observe(cardElement);

    return () => {
      if (cardElement) observer.unobserve(cardElement);
      observer.disconnect();
      setHoveredCard(false);
    };
  }, [setHoveredCard, cardId]);
}
