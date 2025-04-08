import { motion } from "framer-motion";

const CardContainer = ({ children, isVisible }) => (
  <motion.div style={{ height: window.innerHeight }}>
    <div className="min-h-screen bg-[url('/images/mobile.png')] bg-cover bg-center bg-no-repeat p-2">
      {children}
    </div>
  </motion.div>
);

export default CardContainer;
