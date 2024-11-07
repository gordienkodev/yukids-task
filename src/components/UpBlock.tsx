import { useState } from "react";

interface UpBlockProps {
  isDarkMode: boolean;
}

const UpBlock: React.FC<UpBlockProps> = ({ isDarkMode }) => {
  const [isShifted, setIsShifted] = useState(false);

  const togglePosition = () => {
    setIsShifted((prev) => !prev);
  };

  return (
    <div
      onClick={togglePosition}
      className={`w-[66px] h-[31px] transition-all duration-300 ${isShifted ? 'mt-10' : 'mt-0'}`}
      style={{
        backgroundImage: `url('/images/${isDarkMode ? 'Vector2.png' : 'Vector1.png'}')`,
      }}
    ></div>
  );
};

export default UpBlock;
