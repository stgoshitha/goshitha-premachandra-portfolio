import { motion } from 'framer-motion';

const NavigationButton = ({ id }) => {
  
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 30;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative xl:bottom-48 bottom-32 w-full flex justify-center items-center cursor-pointer">
      <a
        href={`#${id}`}
        onClick={handleClick}
        className="text-2xl font-bold text-white flex flex-col items-center hover:text-orange-500 transition duration-300"
        aria-label="Scroll to next section"
      >
        <div className="w-[35px] h-[64px] rounded-3xl border-orange-500 border-4 flex justify-center items-start p-4">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[11px] border-t-orange-500 mb-1"
          />
        </div>
      </a>
    </div>
  );
};

export default NavigationButton;
