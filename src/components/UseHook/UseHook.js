import { useState, useEffect } from "react";

const UseHook = () => {
  // setting initial value to true
  const [scroll, setScroll] = useState(0);

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 0;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

export default UseHook;
