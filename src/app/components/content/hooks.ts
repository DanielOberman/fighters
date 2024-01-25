import React from "react";

export const useContentApi = (isScrollTop: boolean,
    setIsScrollTop: React.Dispatch<React.SetStateAction<boolean>>) => {

    const scrollContainerRef = React.useRef(null);
    const [scrollDistance, setScrollDistance] = React.useState(0);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
          // @ts-ignore
          const distance = scrollContainerRef?.current?.scrollTop;
          setScrollDistance(distance);
        }
    };

    React.useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
    
        if (scrollContainer) {
          // @ts-ignore
          scrollContainer.addEventListener('scroll', handleScroll);
    
          return () => {
            // @ts-ignore
            scrollContainer.removeEventListener('scroll', handleScroll);
          };
        }
    }, []);

    React.useEffect(() =>  {
        if (scrollDistance < 281 && !isScrollTop) {
            setIsScrollTop(true)
        }

        if (scrollDistance > 281 && isScrollTop) {
            setIsScrollTop(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[scrollDistance])

    const scrollToTop = () => {
        if (scrollContainerRef.current) {
          // @ts-ignore
          scrollContainerRef.current.scrollTop = 0
        }
    };

    const scrollDown = () => {
        if (scrollContainerRef.current) {
          // @ts-ignore
          scrollContainerRef.current.scrollTop = 513;

        }
    };

    return {
        scrollToTop,
        scrollDown,
        scrollContainerRef,
    }
}