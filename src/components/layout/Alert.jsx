import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import { FaTimesCircle } from 'react-icons/fa'


function Alert() {

    const { alert } = useContext(AlertContext)


    return alert !== null && (

        <div className="flex ">
            <FaTimesCircle className='mt-1 mr-2 text-red' />

            <p className=" text-text mb-4 font-semibold">
                {alert.msg}
            </p>
        </div>

    )


}

export default Alert
