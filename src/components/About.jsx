import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 className={styles.sectionHeadText}>Overview</h3>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]'
      >
        I hold a bachelor's degree in Software Engineering from Burgas Free University and three years of hands-on experience. My passion lies in drawing and creating captivating, responsive designs. I'm dedicated to staying ahead of the curve in technology, constantly pushing boundaries to deliver innovative web solutions.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, 'about')