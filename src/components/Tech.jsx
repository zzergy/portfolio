import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I use</p>
        <h3 className={styles.sectionHeadText}>Tech Stack.</h3>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-6">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <span>{technology.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
