import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { SSUsersService } from '../services/ss_users_service';
const BASE_PATH = import.meta.env.BASE_URL;

const Welcome = ({ }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await SSUsersService.updateViewStats(id);
      navigate(`${BASE_PATH}/breaking-news/user/${id}`);
    } catch (error) {
      console.error('Failed to update view stats:', error);
      navigate(`${BASE_PATH}/breaking-news/user/${id}`);
    }
  };

  return (
    <div className="min-h-[calc(110dvh)] flex justify-center items-center flex-col text-center p-2 bg-[url('/images/mobile.png')] bg-cover bg-center bg-no-repeat">
      <a
        href="#"
        onClick={handleClick}
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
      </a>
    </div>
  );
};

export default Welcome;
