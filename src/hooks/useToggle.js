import React, { useState } from 'react';

const useToggle = (value) => {
  const [show, setShow] = useState(value);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  return { show, handleToggle };
};

export default useToggle;
