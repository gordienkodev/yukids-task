import { useState } from "react";

const UpBlock = () => {
    const [isShifted, setIsShifted] = useState(false);

    const togglePosition = () => {
      setIsShifted((prev) => !prev);
    };

  return (
    <div
      onClick={togglePosition}
      className={`w-[66px] h-[31px] bg-[url('/images/Vector1.png')] transition-all duration-300 ${isShifted ? 'mt-10' : 'mt-0'}`}
    ></div>
  );
};

export default UpBlock;
