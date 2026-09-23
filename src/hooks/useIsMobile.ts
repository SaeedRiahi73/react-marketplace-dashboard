import { useEffect, useState } from "react";

const getMobileMediaQuery = (breakpoint: number): MediaQueryList =>
  window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

const getIsMobile = (breakpoint: number): boolean => {
  if (typeof window === "undefined") return false;

  return getMobileMediaQuery(breakpoint).matches;
};

const useIsMobile = (breakpoint = 768): boolean => {
  const [isMobile, setIsMobile] = useState(() => getIsMobile(breakpoint));

  useEffect(() => {
    const mediaQuery = getMobileMediaQuery(breakpoint);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // اگر breakpoint در زمان اجرا تغییر کند، state با query جدید هماهنگ می‌شود.
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
