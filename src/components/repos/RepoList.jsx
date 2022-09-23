import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
import { motion } from 'framer-motion'


function RepoList({ repos }) {

    return (
        <motion.div
            initial={{ y: '100px', opacity: 0 }}
            animate={{ y: '0px', opacity: 1 }}
            transition={{ duration: 1 }}>
            <div className='rounded-lg shadow-lg card bg-secondarybg'>
                <div className="card-body">
                    <h2 className='text-text text-3xl my-4 font-bold card-title'>
                        Latest Repositories
                    </h2>
                    {repos.map((repo) => (
                        <RepoItem key={repo.id} repo={repo} />
                    ))}
                </div>
            </div>
        </motion.div>
    )

}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default RepoList
