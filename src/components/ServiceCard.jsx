
const ServiceCard = ({ title, description, icon }) => (
  <div className='h-[300px] w-full'>
    <div className="flex flex-col justify-center items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
    <img src={icon} alt={title} className="mb-4 w-[150px] h-[150px] rounded-full" />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2">{description}</p>
  </div>
  </div>
  
);

export default ServiceCard;
