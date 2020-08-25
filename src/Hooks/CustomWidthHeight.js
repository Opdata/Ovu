import { useState, useEffect } from "react";

export default () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const inner = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    if (document.body.clientHeight > window.innerHeight) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", () => {
      const delay = 300;
      let timer = null;
      clearTimeout(timer);
      timer = setTimeout(() => {
        inner();
      }, delay);
    });

    return () => {
      window.removeEventListener("resize", inner);
    };
  }, []);

  return { width, height };
};
