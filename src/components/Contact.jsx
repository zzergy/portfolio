import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef();
  const defaultState = { name: '', email: '', message: '' }
  const [form, setForm] = useState(defaultState)
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    emailjs.send('service_80g6hum',
      'template_qm7w9rc',
      {
        from_name: form.name,
        to_name: "Bogdana Yaneva",
        from_email: form.email,
        to_email: 'bogdana.yaneva@gmail.com',
        message: form.message
      },
      'NfXzjZ17K8TL54r2D')
      .then(() => {
        setLoading(false)
        alert('Thank you! I will get back to you as soon as possible :)')
        setForm(defaultState)
      }, (error) => {
        setLoading(false)
        console.error(error)
        setForm(defaultState)

        alert('Oops, something went wrong..')
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 0.75)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name here..'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email here..'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write me a message here :)'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending..' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.75)}
        className='xl:flex-1 xl:height-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")