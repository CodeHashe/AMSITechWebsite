import React, { useEffect } from "react";
import "../Styles/styles.css"; // Assuming styles are in this file

function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const shrinkCursor = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    };

    const enlargeCursor = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.2)";
    };

    // Event listeners for mouse movement and interactions
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", shrinkCursor);
    window.addEventListener("mouseup", enlargeCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", shrinkCursor);
      window.removeEventListener("mouseup", enlargeCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null; // This component only handles the cursor, no visible render
}

export default CustomCursor;
