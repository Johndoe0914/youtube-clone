import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { isAuthenticated, selectUser} from '../features/userSlice';

const Settings = () => {
    const isAuth = useSelector(isAuthenticated);
    const user = useSelector(selectUser);

    return (
        <div className='settings'>
            {isAuth ? (<h3>Welcome {user.displayName} to Youtube</h3>) : <h1>i am not autgenticated</h1>}
        </div>
    )
}

export default Settings
