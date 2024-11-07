
import './App.css';
import UpBlock from './components/UpBlock';

function App() {
  const config = [
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
      bottom: [1,2],
    },
    {
      top: [1, 2, 3, 4],
      bottom: [5],
    },
  ];

  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-700 via-yellow-400 to-yellow-200">
      <div className="flex justify-center items-center space-x-0">
        {config.map((blockConfig, index) => (
          <div key={index} className="py-5 w-[100px] h-[400px] bg-[url('/images/Frame1.png')] bg-cover bg-center flex flex-col justify-between items-center">
            <UpBlock />
            {/* down */}
            <div className="flex flex-col space-y-1  h-[68%] justify-between ">
              <div className='flex flex-col space-y-1'>
                {blockConfig.top.map((_, i) => (
                  <div
                    key={`top-${i}`}
                    className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"
                  ></div>
                ))}
              </div>
              <div className='flex flex-col space-y-1'>
                {blockConfig.bottom.map((_, i) => (
                  <div key={`bottom-${i}`} className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
