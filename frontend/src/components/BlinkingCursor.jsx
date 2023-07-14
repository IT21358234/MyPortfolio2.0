import React, { useState, useEffect } from 'react';

function BlinkingCursor() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    const interval = setInterval(toggleVisibility,1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {visible && (
        <span style={{ animation: 'blink 1s infinite' }}>|</span>
      )}
    </div>
  );
}

export default BlinkingCursor;