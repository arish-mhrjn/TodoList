import React, { useEffect } from 'react';

const CustomHook = (Count) => {
  useEffect(() => {
    if (Count >= 1) {
      document.title = `Chats(${Count})`;
    } else {
      document.title = `Chats`;
    }
  });
};

export default CustomHook;
