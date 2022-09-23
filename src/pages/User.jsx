import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCodepen, FaStore, FaUserFriends, FaUsers, FaChevronLeft } from 'react-icons/fa'
import Spinner from '../components/layout/Spinner'
import RepoList from '../components/repos/RepoList'
import GithubContext from '../context/github/GithubContext'
import { getUserAndRepos } from '../context/github/GithubActions'


function User() {

    const { user, loading, repos, dispatch } = useContext(GithubContext);
    const params = useParams()

    useEffect(() => {
        dispatch({ type: 'SET_LOADING' })

        const getUserData = async () => {
            const UserData = await getUserAndRepos(params.login)
            dispatch({ type: 'GET_USER_AND_REPOS', payload: UserData })
        }

        getUserData()
    }, [dispatch, params.login])

    const { name, type, avatar_url, location, bio, blog, twitter_username, login
        , html_url, followers, following, public_repos, public_gists, hireable, } = user;


    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <div className="w-full mx-auto lg:w-10/12 ">
                <div className="mb-4">
                    <Link to='/' className='btn btn-ghost text-white'> <FaChevronLeft /> Back To Search</Link>
                </div>
                <div className=" grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                    <motion.div
                        initial={{ x: '-100px', opacity: 0 }}
                        animate={{ x: '0px', opacity: 1 }}
                        transition={{
                            duration: 1
                        }}>
                        <div className="custom-card-image mb-6 md:mb-0">
                            <div className="rounded-lg shadow-xl card image-full">
                                <figure>
                                    <img src={avatar_url} alt="" />
                                </figure>
                                <div className="card-body justify-end ">
                                    <h2 className='card-title text-text mb-0'>
                                        {name}
                                    </h2>
                                    <p className='flex-grow-0'>{login}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    <div className="col-span-2">
                        <motion.div
                            initial={{ x: '100px', opacity: 0 }}
                            animate={{ x: '0px', opacity: 1 }}
                            transition={{ duration: 1 }}>

                            <div className="mb-6">
                                <h1 className="text-3xl card-title text-text">
                                    {name}
                                    <div className="ml-2 mr-1 mt-2 badge badge-success badge-outline ">
                                        {type}</div>
                                    {hireable && (
                                        <div className="mx-1 mt-2 badge badge-info badge-outline">
                                            Hireable
                                        </div>
                                    )}
                                </h1>
                                <p className='text-secondarytext'>{bio}</p>
                                <div className="mt-4 card-actions">
                                    <a href={html_url} target='_blank' rel='noreferrer'
                                        className='btn bg-greenbtn text-white'>
                                        Visit Github Profile
                                    </a>
                                </div>
                            </div>

                            <div className="w-full rounded-2xl shadow-2xl bg-secondarybg stats ">
                                {location && (
                                    <div className="stat text-text">
                                        <div className="state-title text-md">
                                            Location
                                        </div>
                                        <div className="text-lg stat-value">
                                            {location}
                                        </div>
                                    </div>
                                )}
                                {blog && (
                                    <div className="stat text-text">
                                        <div className="state-title text-md">
                                            Website
                                        </div>
                                        <div className="text-lg stat-value">
                                            <a href={`https://${blog}`} target='_blank' rel='noreferrer'>
                                                {blog}
                                            </a>
                                        </div>
                                    </div>
                                )}
                                {twitter_username && (
                                    <div className="stat text-text">
                                        <div className="state-title text-md">
                                            Twitter
                                        </div>
                                        <div className="text-lg stat-value">
                                            <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'>
                                                {twitter_username}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ y: '100px', opacity: 0 }}
                    animate={{ y: '0px', opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <div className="w-full py-5 mb-6 rounded-lg shadow-lg bg-secondarybg stats">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <FaUsers className='text-3xl md:text-4xl' />
                            </div>
                            <div className="stat-title pr-5">
                                Followers
                            </div>
                            <div className="stat-value pr-5 text-2xl  md:text-3xl ">
                                {followers}
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUserFriends className='text-3xl md:text-4xl' />
                            </div>
                            <div className="stat-title pr-5">
                                Following
                            </div>
                            <div className="stat-value pr-5 text-2xl  md:text-3xl ">
                                {following}
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-info  ">
                                <FaCodepen className='text-3xl md:text-4xl' />
                            </div>
                            <div className="stat-title pr-5">
                                Public Repos
                            </div>
                            <div className="stat-value pr-5 text-2xl  md:text-3xl ">
                                {public_repos}
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-accent">
                                <FaStore className='text-3xl md:text-4xl' />
                            </div>
                            <div className="stat-title pr-5">
                                Public Gists
                            </div>
                            <div className="stat-value pr-5 text-2xl  md:text-3xl ">
                                {public_gists}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <RepoList repos={repos} />
            </div>

        </>
    )
}

export default User
