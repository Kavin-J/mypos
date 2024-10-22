import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { login, logout, } from '../../app/features/auth/authSlice'
import { Navigate } from 'react-router'

type Props = {}

function Login({ }: Props): JSX.Element | null {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { user, error, loading } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>()
    const token = useSelector((state: RootState) => state.auth.user?.token)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(login({ email, password }));
        setEmail('')
        setPassword('')

    }
    const handleLogout = () => {
        dispatch(logout())

    }


    if (token) return (<Navigate to={'/'} />)

    return (
        <div>
            <div>{JSON.stringify({ email, password })}</div>
            <div>{JSON.stringify({ user, loading, error })}</div>
            {user ? (
                <button className='bg-red-400' onClick={handleLogout}>Log out</button>
            ) : (<form onSubmit={handleSubmit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className='bg-green-400' />
            </form>)}
        </div>
    )



}

export default Login