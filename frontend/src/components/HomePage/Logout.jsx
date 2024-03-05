import {useNavigate,React}from 'react'

const Logout = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
  
}

export default Logout