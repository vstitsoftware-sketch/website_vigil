import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        // Disable browser's default scroll restoration to avoid conflicts
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Only scroll to top if there's no hash (anchor)
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
