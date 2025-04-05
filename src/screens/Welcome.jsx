import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
const BASE_PATH = import.meta.env.BASE_URL;

const Welcome = ({  }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(97dvh)] flex justify-center items-center flex-col text-center p-2 bg-[url('/images/mobile.png')] bg-cover bg-center bg-no-repeat">
      <Link 
        to={`${BASE_PATH}/home`}
        className="px-4 py-2 duration-300 relative"
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/1 text-white font-bold text-lg z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          OPEN
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          src={`${BASE_PATH}/images/button.png`}
          alt="button"
          className="h-10 mb-7 relative"
        />
      </Link>
    </div>
  );
};

export default Welcome;
