import Image from 'next/image'
import Link from 'next/link'
import logo from "../assets/images/logo1.svg"
import React from 'react'
import { CiBank, CiLogin, CiLogout, CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-gray-100">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
            <Link href="/">
                <Image
                    className="h-14 w-14"
                    src={logo}
                    alt="Bookit"
                    priority={true}
                />
            </Link>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <Link
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                    Properties
                </Link>
                {/* <!-- Logged In Only --> */}
                <Link
                    href="/investments"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                    Investments
                </Link>
                <Link
                    href="/add-property"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                    Add Property
                </Link>
                </div>
            </div>
            </div>
            {/* <!-- Right Side Menu --> */}
            <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
                {/* <!-- Logged Out Only --> */}
                <Link
                href="/login"
                className="mx-3 text-gray-800 flex items-center gap-1 hover:text-gray-600"
                >
                    <CiLogin className='text-lg'/> Login
                </Link>
                <Link
                href="/register"
                className="mx-3 text-gray-800 flex items-center gap-1 hover:text-gray-600"
                >
                    <CiUser className='text-xl'/> Register
                </Link>
                <Link href="/my-rooms"
                className="mx-3 text-gray-800 flex items-center gap-1 hover:text-gray-600"
                >
                    <CiBank className='text-lg' /> My Investments
                </Link>
                <Link
                href="/login"
                className="mx-3 text-gray-800 flex items-center gap-1 hover:text-gray-600"
                >
                    <CiLogout className='text-lg' /> Sign Out
                </Link>
            </div>
            </div>
        </div>
        </nav>

        {/* <!-- Mobile menu --> */}
        <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
                Properties
            </Link>
            {/* <!-- Logged In Only --> */}
            <Link
            href="/investments"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
                Investments
            </Link>
            <Link
            href="/add-property"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
                Add Property
            </Link>
        </div>
        </div>
    </header>
  )
}

export default Header
