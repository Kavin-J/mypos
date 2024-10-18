// features/user/UserProfile.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { clearUser } from './userSlice';

const UserProfile: React.FC = () => {
    const { name, email } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <button onClick={() => dispatch(clearUser())}>Logout</button>
        </div>
    );
};

export default UserProfile;
