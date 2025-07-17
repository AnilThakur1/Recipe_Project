 
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let animationFrame;
    let observer;
    let timeout;

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Function to wait until layout stops changing
    const waitForLayoutStability = () => {
      let lastHeight = document.body.scrollHeight;

      observer = new MutationObserver(() => {
        cancelAnimationFrame(animationFrame);

        animationFrame = requestAnimationFrame(() => {
          const currentHeight = document.body.scrollHeight;
          if (currentHeight === lastHeight) {
            // Page has stopped changing — scroll now
            scrollToTop();

            // Stop observing
            observer.disconnect();
          } else {
            lastHeight = currentHeight;
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      // Fallback timeout just in case
      timeout = setTimeout(() => {
        observer.disconnect();
        scrollToTop();
      }, 1500);
    };

    waitForLayoutStability();

    return () => {
      if (observer) observer.disconnect();
      if (timeout) clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;

