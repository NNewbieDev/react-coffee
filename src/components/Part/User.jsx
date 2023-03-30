import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const User = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faUser} className="text-yellow-900 dark:text-orange-200 text-2xl p-3 mr-10 rounded-full hover:bg-yellow-900 dark:hover:bg-yellow-600 hover:text-orange-200 hover:cursor-pointer drop-shadow-xl" />
        </div>
    )
}

export default User
