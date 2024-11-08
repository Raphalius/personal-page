import { useEffect } from "react";

export const handleScroll = (containerRef, setActiveIndex) => {
    if (containerRef.current) {
        const items = containerRef.current.children;
        let newActiveIndex = 0;

        for (let i = 0; i < items.length; i++) {
            const rect = items[i].getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                newActiveIndex = i;
                break;
            }
        }
        setActiveIndex(newActiveIndex);
    }
};

export const useScrollHighlight = (containerRef, setActiveIndex) => {
    useEffect(() => {
        const container = containerRef.current;

        const scrollHandler = () => handleScroll(containerRef, setActiveIndex);
        container.addEventListener('scroll', scrollHandler);

        return () => container.removeEventListener('scroll', scrollHandler);
    }, [containerRef, setActiveIndex]);
};