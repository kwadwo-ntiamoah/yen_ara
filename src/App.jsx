import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <div className="h-screen flex flex-col w-screen bg-blue-400 bg-[url('assets/stepsBg.svg')] bg-auto bg-center">
        <div className="h-[83px]"></div>
        <div className=" grow container py-5 flex flex-col items-center justify-center space-y-10">
          <p className="text-[4.125rem] leading-[4.437rem] text-white font-bold text-center">
            Unlocking Business Insights for Strategic Growth
          </p>
          <p className="text-white text-center">We bring clarity to complexities, blending business acumen with user experience expertise for unparalleled success</p>
          <div className="flex gap-x-3">
            <button className="btn btn-outlined">Learn about us</button>
            <button className="btn btn-primary">Book a free call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
