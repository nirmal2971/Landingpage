import { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 600) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev >= items.length - visible ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length, visible]);

  const next = () => {
    setIndex((prev) =>
      prev >= items.length - visible ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? items.length - visible : prev - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="carousel-item"
              style={{ minWidth: `${100 / visible}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </div>
  );
};

export default Carousel;