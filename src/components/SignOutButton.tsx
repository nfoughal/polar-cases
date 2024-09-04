"use client"

import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
    const handleSignOut = async () => {
        await signOut({callbackUrl: '/'});
    };
    return (
        <Button onClick={handleSignOut} variant='ghost' size='sm'>
            Sign out
        </Button>
        )
}

export default SignOutButton;