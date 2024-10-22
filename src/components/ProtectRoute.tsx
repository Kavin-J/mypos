import { PropsWithChildren, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RootState } from '../app/store';

const ProtectedRoute = ({ children }: PropsWithChildren): JSX.Element | null => {
    const user = useSelector((state: RootState) => state.auth.user);
    const isAuthenticated = !!user?.token

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (<>{children}</>)
}
export default ProtectedRoute