import { useState } from 'react';
import './App.css'

function App() {

  const [isShifted, setIsShifted] = useState(false);

  const togglePosition = () => {
    setIsShifted((prev) => !prev);
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-700 via-yellow-400 to-yellow-200">
      <div className="flex justify-center items-center space-x-0">

        {/* block */}
        <div className="pt-[40px] pb-[20px] w-[100px] h-[400px] bg-[url('/images/Frame1.png')] bg-cover bg-center flex flex-col justify-between items-center">
          {/* up */}
          <div
            onClick={togglePosition}
            className={`w-[66px] h-[31px] bg-[url('/images/Vector1.png')] transition-all duration-300 ${isShifted ? 'mt-10' : 'mt-0'
              }`}
          ></div>

          {/* down */}
          <div className='flex flex-col space-y-1'>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>

          </div>
        </div>

        {/* block */}
        <div className=" py-5 w-[100px] h-[400px] bg-[url('/images/Frame1.png')] bg-cover bg-center flex flex-col justify-between items-center">
          {/* up */}
          <div className='flex flex-col'>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
          </div>

          {/* down */}
          <div className='flex flex-col space-y-1'>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>

          </div>
        </div>


        {/* block */}
        <div className=" py-5 w-[100px] h-[400px] bg-[url('/images/Frame1.png')] bg-cover bg-center flex flex-col justify-between items-center">
          {/* up */}
          <div className='flex flex-col'>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
          </div>

          {/* down */}
          <div className='flex flex-col space-y-1'>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>

          </div>
        </div>

        {/* block */}
        <div className=" py-5 w-[100px] h-[400px] bg-[url('/images/Frame1.png')] bg-cover bg-center flex flex-col justify-between items-center">
          {/* up */}
          <div className='flex flex-col'>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
          </div>

          {/* down */}
          <div className='flex flex-col space-y-1'>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>

          </div>
        </div>

        {/* block */}
        <div className=" py-5 w-[100px] h-[400px] bg-[url('/images/Frame1.png')] bg-cover bg-center flex flex-col justify-between items-center">
          {/* up */}
          <div className='flex flex-col'>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
          </div>

          {/* down */}
          <div className='flex flex-col space-y-1'>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>
            <div className="w-[66px] h-[31px] bg-[url('/images/Vector1.png')]"></div>

          </div>
        </div>


      </div>
    </main>
  );
}

export default App;
