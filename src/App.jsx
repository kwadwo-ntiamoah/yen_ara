import Navbar from "./components/navbar";
import ServiceCard from "./components/serviceCard";

const App = () => {
  const services = [
    {
      title: "Business Process Analysis",
      description:
        "We help businesses streamline operations for efficiency by identifying bottlenecks and optimising process.",
    },
    {
      title: "Business Strategy Analysis",
      description:
        "We craft strategies for sustainable growth through Identifying and capitalizing on market disruptions.",
    },
    {
      title: "Business Process Optimization",
      description:
        "Delivering excellence and reliable solutions to company size and small non-profits.",
    },
    {
      title: "Innovative Solution Implementation",
      description:
        "We have the team to help you build your digital solutions and make it readily available for your market",
    },
    {
      title: "User Experience Research",
      description:
        "We make sure that your target customers are happy with your products",
    },
    {
      title: "Business Analysis Coaching",
      description: "Let's help your internal teams grow",
    },
  ];

  return (
    <div>
      {/* navbar */}
      <Navbar />
      <div className="h-screen flex flex-col w-screen bg-blue-400 bg-[url('assets/stepsBg.svg')] bg-auto bg-center">
        <div className="h-[83px]"></div>
        <div className="grow container py-5 flex flex-col items-center justify-center space-y-10">
          <p className="text-[4.125rem] leading-[4.437rem] text-white font-bold text-center">
            Unlocking Business Insights for Strategic Growth
          </p>
          <p className="text-white text-center">
            We bring clarity to complexities, blending business acumen with user
            experience expertise for unparalleled success
          </p>
          <div className="flex gap-x-3">
            <button className="btn btn-outlined">Learn about us</button>
            <button className="btn btn-primary">Book a free call</button>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="h-screen w-screen bg-primary-100 flex flex-col">
        <div className="h-[83px]"></div>
        <div className="grow container flex flex-col justify-around ">
          {/* about */}
          <div className="flex flex-col space-y-3">
            <p className="text-5xl font-bold">About Us</p>
            <p>
              We are an innovative consultants helping businesses whether big or
              small stay tough, independent and operational in difficult
              economies.{" "}
            </p>
          </div>

          {/* vision */}
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-bold">Our Vision</p>
            <p>
              Be the leading consultant in empowering organisations to thrive in
              dynamic markets through insightful analysis, innovative
              strategies, and actionable solutions.
            </p>
          </div>

          {/* mission */}
          <div>
            <p className="text-2xl font-bold">Our Mission</p>
            <p>
              To provide exceptional expertise in business analysis, leveraging
              on data-driven insights and innovative approaches for better
              decision-making, streamline processes, and foster sustainable
              growth for our clients.
            </p>
          </div>

          {/* process */}
          <div>
            <p className="text-2xl font-bold">Our Process</p>
            <p>
              Our comprehensive process involves thorough data gathering,
              research, and strategy meetings to identify potential, address
              challenges, and develop customized solutions, ensuring continuous
              improvement and market adaptation.
            </p>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="h-full w-screen bg-white py-12">
        
        <div className="container flex flex-col space-y-3 text-center">
          <p className="text-4xl font-bold">Our Services</p>
          <p>
            Our work is rooted in critical analysis and a user-centric
            philosophy, ensuring that every solution we deliver is not just
            functional but exceptional with the below
          </p>
        </div>
        <div className="grow container grid grid-cols-1 py-10 gap-8">
          {services.map((service) => {
            return <ServiceCard service={service} key={service.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
