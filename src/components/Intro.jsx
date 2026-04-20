import imgIntro from "/public/assets/illustration-intro.svg";

function Intro() {
  return (
    <div className="flex flex-col w-[90%] my-10 mx-auto 
                    md:flex-row-reverse md:items-center md:gap-10 md:w-[80%]">

      <img 
        src={imgIntro} 
        alt="intro" 
        className="w-full max-w-md mx-auto md:max-w-none md:w-1/2"
      />

      <div className="flex flex-col md:w-1/2">
        <h1 className="font-bold text-4xl text-center 
                       sm:text-5xl md:text-5xl lg:text-7xl md:text-left">
          Bring everyone together to build better products.
        </h1>

        <p className="text-gray-400 text-center my-6 leading-7 
                      md:text-left md:w-[90%] lg:w-[80%]">
          Manage makes it simple for software teams to plan day-to-day tasks 
          while keeping the larger team goals in view.
        </p>

        <button className="bg-orange-400 mx-auto md:ml-0 px-6 py-3 
                           rounded-full shadow-lg shadow-orange-400/50 
                           text-white text-sm cursor-pointer hover:bg-orange-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Intro;