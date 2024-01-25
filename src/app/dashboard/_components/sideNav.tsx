"use client"

import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react"; ``

import logo from "@/assets/logo-text-v24.png"
import Image from "next/image";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { MainDashboard } from "./dashboard";
import { Patients } from "./patients";
import { Users } from "./users";
import { Payments } from "./payments";

const menuItems = [
    {
        name: "Dashboard",
        containerClass: "dashboard",
        component: <MainDashboard />
    },
    {
        name: "Patients",
        containerClass: "patient",
        component: <Patients />
    },
    {
        name: "Users",
        containerClass: "users",
        component: <Users />
    },
    {
        name: "Payments",
        containerClass: "payment",
        component: <Payments />
    },
]


export const SideNav = ({ onComponentChange }: any) => {

    const router = useRouter();

    const handleSideNavClick = (element: React.JSX.Element) => {
        onComponentChange(element)
    }

    const handleSignOut = () => {
        signOut();
        localStorage.removeItem('userId');
    }

    return (
        <Disclosure as="nav">
            <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                <GiHamburgerMenu
                    className="block md:hidden h-6 w-6 z-10 "
                    aria-hidden="true"
                />
            </Disclosure.Button>
            <div className="p-6 w-1/2 h-full bg-fi-white z-20 relative top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <Link href={'/'} ><Image src={logo} alt="" className="cursor-pointer pb-4 w-full" /></Link>
                        <div className=" my-4 border-b border-gray-100 pb-4">
                            {
                                menuItems.map(item => {
                                    return (
                                        <div
                                            key={item.name}
                                            onClick={() => handleSideNavClick(item.component)}
                                            className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-green-950 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                                        >
                                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                                {item.name}
                                            </h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* setting  */}
                    <div>
                        {/* <div className="border-b border-gray-100">
                            <div onClick={() => handleSideNavClick(<AccountSettings />)} className="flex justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                    Settings
                                </h3>
                            </div>
                        </div> */}
                        {/* logout */}
                        <div className=" my-4">
                            <div onClick={() => handleSignOut()} className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                    Logout
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}