import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies that I use</p>
        <h3 className={styles.sectionHeadText}>Tech Stack.</h3>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-4'>
        {technologies.map(technology => (
          <div className='w-24 h-24' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default SectionWrapper(Tech, '')