import { heroContent } from '../AllText';
import { motion } from 'framer-motion';
import myLarge from '/src/assets/herome.png';
import mySmall from '/src/assets/my.png';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import myCV from '/src/assets/Goshitha-Premachandra-CV.pdf';


const Hero = ({ id }) => {
  return (
    <div id={id} className="h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center ">
      <div className="flex flex-col lg:flex-row pt-[150px] pl-[100px] pr-[100px] justify-between items-center gap-10">
        <div className="flex-1">
          <motion.div
            className="absolute inset-0 top-[100px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-orange-500" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <motion.div
              className="absolute lg:relative top-[210px] lg:top-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="font-black lg:text-[80px] text-[40px] lg:leading-[98px] mt-2 text-white text-center xl:text-left mr-4 xl:mr-0">
                Hi, I'm <span className="text-orange-500">{heroContent.name}</span>
              </h1>
              <p className="text-[#dfd9ff] font-medium lg:text-[30px] text-[15px] lg:leading-[40px] mt-2 text-white-100 text-center xl:text-left mr-4 xl:mr-0">
                {heroContent.description1}<br className="sm:block hidden" />
                {heroContent.description2}
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center xl:flex xl:justify-start gap-6 mt-8 mr-4 xl:mr-0">

                <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center ring-4 ring-white hover:ring-orange-500 hover:ring-4">
                  <a href={heroContent.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white text-3xl hover:text-orange-500 transition duration-300" />
                  </a>
                </div>

                <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center ring-4 ring-white hover:ring-orange-500 hover:ring-4">
                  <a href={heroContent.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white text-3xl hover:text-orange-500 transition duration-300" />
                  </a>
                </div>

                <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center ring-4 ring-white hover:ring-orange-500 hover:ring-4">
                  <a href={heroContent.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white text-3xl hover:text-orange-500 transition duration-300" />
                  </a>
                </div>
              </div>

              {/* CV Download Button */}
              <div className="flex justify-center xl:flex xl:justify-start mt-8 mr-4 xl:mr-0">
                <a
                  href={myCV}
                  download
                  className="inline-block bg-orange-500 font-semibold text-white text-lg px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300"
                >
                  Download My CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          {/* Large image for larger screens */}
          <motion.img
            src={myLarge}
            alt="Large Hero"
            className="absolute top-[80px] hidden lg:block lg:w-[500px] lg:h-[608px] xl:w-[500px] xl:h-[608px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Small image for smaller screens */}
          <motion.img
            src={mySmall}
            alt="Small Hero"
            className="absolute top-[80px] lg:hidden sm:block w-[230px] h-[230px] sm:w-[350px] sm:h-[350px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
