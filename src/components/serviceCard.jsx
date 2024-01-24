import serviceIcon from "../assets/service.svg";

const ServiceCard = ({ service }) => {
    console.log(service)
  return (
    <div className="bg-[#EAEAEA] rounded-lg p-7">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <img
          src={serviceIcon}
          className="h-10 w-10 p-2 rounded-full bg-black"
          alt="service.svg"
        />
        <p className="text-xl font-semibold">{service.title}</p>
        <p>
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
