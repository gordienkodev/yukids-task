import { useEffect, useState } from 'react';
import './App.css';
import UpBlock from './components/UpBlock';

function App() {
  const [topCount, setTopCount] = useState<number>(0);
  const [topValue, setTopValue] = useState<number>(0);
  const [bottomValue, setBottomValue] = useState<number>(0);
  const [config, setConfig] = useState<{ top: number[], bottom: number[] }[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const startConfig = [
    {
      top: [1],
      bottom: [2, 3, 4, 5],
    },
    {
      top: [1, 2],
      bottom: [3, 4, 5, 6],
    },
    {
      top: [1, 2, 3, 4, 5, 6, 7],
      bottom: [],
    },
    {
      top: [],
      bottom: [1],
    },
    {
      top: [],
      bottom: [1, 2],
    },
    {
      top: [1, 2, 3, 4],
      bottom: [5],
    },
  ];

  const generateConfig = (topCount: number, topValue: number, bottomValue: number) => {
    const topArray = new Array(topValue).fill(1);
    const bottomArray = new Array(bottomValue).fill(1);

    return new Array(topCount).fill({ top: topArray, bottom: bottomArray });
  };

  useEffect(() => {
    if (topCount === 0 && topValue === 0 && bottomValue === 0) {
      setConfig(startConfig);
    } else {
      const newConfig = generateConfig(topCount, topValue, bottomValue);
      setConfig(newConfig);
    }
  }, [topCount, topValue, bottomValue]);

  const handleTopValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value + bottomValue <= 7) {
      setTopValue(value);
    }
  };

  const handleBottomValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (topValue + value <= 7) {
      setBottomValue(value);
    }
  };

  return (
    <main className={`flex justify-center items-center h-screen bg-gradient-to-br ${isDarkMode ? 'from-green-300 via-green-200 to-green-100' : 'from-yellow-400 via-yellow-300 to-yellow-200'}`}>
      <div className="flex flex-col justify-center items-center gap-10">
        <button
          onClick={toggleTheme}
          className={`p-2 w-24 rounded-full mb-4 ${isDarkMode ? 'bg-teal-500 text-white' : 'bg-yellow-800 text-white'}`}
        >
          Change
        </button>

        <div className='flex flex-row gap-5 justify-center items-center'>
          <div>
            <label htmlFor="topCount" className="text-white font-semibold">Count:</label>
            <input
              id="topCount"
              type="number"
              value={topCount}
              onChange={(e) => setTopCount(Number(e.target.value))}
              min={0}
              className={`w-20 rounded-full py-2 px-4 text-xl border-2 ${isDarkMode ? 'border-gray-500' : 'border-yellow-500'} bg-white text-yellow-700 focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-gray-400' : 'focus:ring-yellow-400'}`}

            />
          </div>
          <div>
            <label htmlFor="topValue" className="text-white font-semibold">Top:</label>
            <input
              id="topValue"
              type="number"
              value={topValue}
              onChange={handleTopValueChange}
              min={0}
              className={`w-20 rounded-full py-2 px-4 text-xl border-2 ${isDarkMode ? 'border-gray-500' : 'border-yellow-500'} bg-white text-yellow-700 focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-gray-400' : 'focus:ring-yellow-400'}`}

            />
          </div>
          <div>
            <label htmlFor="bottomValue" className="text-white font-semibold">Bottom:</label>
            <input
              id="bottomValue"
              type="number"
              value={bottomValue}
              onChange={handleBottomValueChange}
              min={0}
              className={`w-20 rounded-full py-2 px-4 text-xl border-2 ${isDarkMode ? 'border-gray-500' : 'border-yellow-500'} bg-white text-yellow-700 focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-gray-400' : 'focus:ring-yellow-400'}`}

            />
          </div>
        </div>

        <div className="flex justify-center items-center space-x-0">
          {config.map((blockConfig, index) => (
            <div key={index} className="py-5 w-[100px] h-[400px] flex flex-col justify-between items-center duration-300" style={{
              backgroundImage: `url('/images/${isDarkMode ? 'Frame2.png' : 'Frame1.png'}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <UpBlock isDarkMode={isDarkMode} />
              {/* down */}
              <div className="flex flex-col space-y-1 h-[68%] justify-between">
                <div className='flex flex-col space-y-1'>
                  {blockConfig.top.map((_, i) => (
                    <div
                      key={`top-${i}`}
                      className={`w-[66px] h-[31px] duration-300`}
                      style={{
                        backgroundImage: `url('/images/${isDarkMode ? 'Vector2.png' : 'Vector1.png'}')`,
                      }}
                    ></div>
                  ))}
                </div>
                <div className='flex flex-col space-y-1'>
                  {blockConfig.bottom.map((_, i) => (
                    <div key={`bottom-${i}`} className="w-[66px] h-[31px]  duration-300" style={{
                      backgroundImage: `url('/images/${isDarkMode ? 'Vector2.png' : 'Vector1.png'}')`,
                    }}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
