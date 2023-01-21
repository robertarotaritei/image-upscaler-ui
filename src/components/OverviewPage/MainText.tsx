import { useEffect, useState } from "react";
import MainTextMobile from "./MainTextMobile";
import MainTextBrowser from "./MainTextBrowser";

function MainText() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <>
      {windowSize > 1000 ? (
        <MainTextBrowser />
      ) : (
        <MainTextMobile />
      )}
    </>
  );
}

export default MainText;