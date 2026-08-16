import { isMobileSelector, setIsMobile } from "@/features/viewportSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useIsMobile = (breakpoint = 768): boolean => {
  const dispatch = useDispatch();
  const isMobile = useSelector(isMobileSelector);

  useEffect(() => {
    // مقدار اولیه درست
    dispatch(setIsMobile(window.innerWidth < breakpoint));

    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth < breakpoint));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, dispatch]);

  return isMobile;
};

export default useIsMobile;
