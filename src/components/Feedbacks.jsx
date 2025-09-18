import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { useEllipsis } from "../hooks/useEllipsis"; // <-- import your hook
import { Link } from "react-router-dom";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  linkedin,
}) => {
  const { displayed, expanded, toggle, canToggle } = useEllipsis(
    testimonial,
    200
  );

  return (
    <motion.div
      className="bg-black-200 rounded-3xl p-6 w-full"
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[16px]">{displayed}</p>

        {canToggle && (
          <button
            onClick={toggle}
            className="mt-2 text-[#915eff] text-sm font-medium hover:underline"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        )}

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex flex-col flex-1 items-center">
            <div className="flex items-center">
              <span className="blue-text-gradient">@&nbsp;</span>
              <Link
                to={linkedin}
                target="_blank"
                className=" text-[#529dff] font-medium  text-[16px] hover:underline"
              >
                {name}
              </Link>
            </div>
            <p className="mt-1 text-secondary text-[12px] text-center">
              {designation}, {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} rounded-2xl `}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Colleague feedbacks</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} pb-14 flex flex-wrap gap-6`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
