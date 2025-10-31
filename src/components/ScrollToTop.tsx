// src/components/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Get the current location object
  const { pathname } = useLocation();

  useEffect(() => {
    // When the pathname changes (i.e., a new route is navigated to),
    // scroll the window to the top instantly.
    window.scrollTo(0, 0);
  }, [pathname]); // Rerun this effect whenever the pathname changes

  // This component doesn't render anything visually
  return null;
};

export default ScrollToTop;
