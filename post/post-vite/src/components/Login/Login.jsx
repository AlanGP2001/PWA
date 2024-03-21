import React from 'react';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Login = () => {
    const login = () => {
        signInAnonymously(getAuth())
            .then((user) => {
                console.log('signInAnonymously Susses: ', user)
            })
            .catch((error) => {
                console.log('signInAnonymously Error: ', error)
            });
    }

    return (
        <div className="container">
            <Button type="primary" onClick={login}>
                <Link to={"/notas"}> Iniciar sesión </Link>
            </Button>
        </div>
    )
}

export default Login
