
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function UserItem({ user: { login, avatar_url } }) {
    return (

        <div className='card compact shadow-2xl bg-secondarybg'>
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow-md w-14 h-14">
                            <img src={avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='card-title text-text'>{login}</h2>
                    <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>
                        Visit Profile
                    </Link>
                </div>
            </div>

        </div>

    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
