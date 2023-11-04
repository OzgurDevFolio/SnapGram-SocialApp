import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignInForm from './_auth/forms/SignInForm'
import { Home } from './_route/pages'
import SignUpForm from './_auth/forms/SignUpForm'
import './globals.css'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_route/RootLayout'
import { Toaster } from '@/components/ui/toaster'

export const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/** public routes */}
                <Route element={<AuthLayout />}>
                    <Route path="sign-in" element={<SignInForm />} />
                    <Route path="sign-up" element={<SignUpForm />} />
                </Route>

                {/** private routes */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
            <Toaster />
        </main>
    )
}
