import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
const BASE_PATH = import.meta.env.BASE_URL;

const Welcome = ({ }) => {
  const { id } = useParams();

  return (
    <div className="min-h-[calc(110dvh)] flex justify-center items-center flex-col text-center p-2 bg-[url('/images/mobile.png')] bg-cover bg-center bg-no-repeat">
      <Link
        to={`${BASE_PATH}/breaking-news/user/${id}`}
        className="px-4 py-2 duration-300 flex flex-col items-center no-underline"
      >
        <motion.div
          className="w-[100px] h-[40px] bg-[url('/images/button.png')] bg-contain bg-center bg-no-repeat flex items-center justify-center text-white font-bold text-lg mb-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          OPEN
        </motion.div>
      </Link>
    </div>
  );
};

export default Welcome;
