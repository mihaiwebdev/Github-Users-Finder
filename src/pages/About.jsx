import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div
            animate={{ y: '-5rem' }}
            transition={{
                duration: 1
            }}>
            <div className="translate-y-20">
                <h1 className="text-6xl mb-4 text-text">Github Finder</h1>
                <p className='mb-4 text-2xl font-light text-secondarytext'>
                    React app to search GitHub profiles and see profile details.
                </p>
                <p className='text-lg text-secondarytext'>
                    Version <span className='text-white'>1.0.0</span>
                </p>
            </div>
        </motion.div>
    )
}

export default About
