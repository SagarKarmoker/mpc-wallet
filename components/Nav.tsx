import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
export default function Nav() {
    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-gray-900">MPC_Wallet</h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                            Contact
                        </a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <SignedOut>
                            <SignInButton>
                                <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton>
                                <button className="bg-[#6c47ff] hover:bg-[#5a3fd8] text-white rounded-lg font-medium text-sm px-4 py-2 transition-colors duration-200 shadow-sm">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    )
}
