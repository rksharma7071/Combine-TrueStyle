import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Account() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/')
        } else {
            navigate('login')
        }
    }, [])

    useEffect(() => {
        const user = {
            username: "reteshsharma",
            email: "retesh.sharma@gmail.com"
        };

        localStorage.setItem('user', JSON.stringify(user)); 
    })
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Account