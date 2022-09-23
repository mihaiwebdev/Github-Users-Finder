import { useContext } from 'react'
import { motion } from 'framer-motion'
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';


function UserResults() {
    const { users, loading } = useContext(GithubContext);


    const itemContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    if (!loading) {
        return (
            <motion.div
                variants={itemContainer}
                initial="hidden"
                animate="visible"
            >
                <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                    {users.map((user) => (
                        <motion.div
                            key={user.id}
                            variants={item}
                        >
                            <UserItem key={user.id} user={user} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        )
    } else {
        return <Spinner />
    }
}

export default UserResults
