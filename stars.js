import React from "https://esm.sh/react@18.2.0";

export default function Stars({ count = 60 }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1
          }}
        />
      ))}
    </div>
  );
}
