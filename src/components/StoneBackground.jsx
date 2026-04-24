import React, { useMemo } from "react";

const StoneBackground = () => {

  const stones = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => {
      const size = Math.random() * 200 + 150;
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      const colors = [
        "rgba(0,194,255,0.15)",
        "rgba(148,137,121,0.15)",
        "rgba(223,208,184,0.12)"
      ];

      return {
        id: i,
        size,
        top,
        left,
        color: colors[Math.floor(Math.random() * colors.length)],
        radius: `${Math.random()*50+30}% ${Math.random()*50+30}% ${Math.random()*50+30}% ${Math.random()*50+30}% / 
                 ${Math.random()*50+30}% ${Math.random()*50+30}% ${Math.random()*50+30}% ${Math.random()*50+30}%`
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none ">
      {stones.map((stone) => (
        <div
          key={stone.id}
          className="absolute"
          style={{
            width: stone.size,
            height: stone.size,
            top: `${stone.top}%`,
            left: `${stone.left}%`,
            borderRadius: stone.radius,

            /* ✅ ONLY OUTLINE */
          border: `1px solid ${stone.color}`,
outline: `1px solid ${stone.color}`,


            /* ❌ removed glow */
            /* ❌ removed animation */

            opacity: 0.6
          }}
        />
      ))}
    </div>
  );
};

export default StoneBackground;