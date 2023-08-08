const { useState, useEffect } = require("react");

const useDimension = () => {
  // Initializing state to store width and height (object)
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  const updateDimension = () => {
    // Getting the window dimensions by destructuring the window object
    const { innerWidth, innerHeight } = window;
    // Updating the dimension state
    setDimension({
      width: innerWidth,
      height: innerHeight,
    });
  };

  useEffect(() => {
    updateDimension();
    // Adding a resize event listener to update dimensions on window resize
    window.addEventListener("resize", updateDimension);
    // Cleaning up the event listener when the component unmounts
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  // Returning the dimension state
  return dimension;
};

export default useDimension;
