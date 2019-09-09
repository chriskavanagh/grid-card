import { useState, useEffect } from "react";

const getWinSize = () => {
  const { innerWidth: width } = window;
  return { width: width };
};

export default function useWinSize() {
  const [windowWidth, setWindowWidth] = useState(getWinSize());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWinSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
