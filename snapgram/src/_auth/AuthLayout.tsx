import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
    const isAuthenticated = false

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <>
                    <section className="flex flex-1 justify-center items-center flex-col py-10">
                        <Outlet />
                    </section>
                    <img src="/assets/images/side-img.svg" alt="Logo" className="hidden xl:block w-1/2 object-cover bg-no-repeat" />
                </>
            )}
        </>
    )
}

export default AuthLayout
