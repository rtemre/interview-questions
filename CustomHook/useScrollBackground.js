import { useEffect, useState } from "react";

function useScrollBackground() {
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Example logic: change color based on scroll position
      if (scrollY < 200) setBgColor("lightblue");
      else if (scrollY < 400) setBgColor("lightgreen");
      else if (scrollY < 600) setBgColor("lightpink");
      else setBgColor("lightgray");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return bgColor;
}

export default useScrollBackground;
