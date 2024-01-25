"use client"

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { SideNav } from "./_components/sideNav";
import { MainDashboard } from "./_components/dashboard";

const Dashboard = () => {
    const [userId, setUserId] = useState("")
    const [activeComponent, setActiveComponent] = useState(<MainDashboard />);
    const router = useRouter()

    useEffect(() => {
        const handleRedirect = async () => {
            try {
                const storedUser = localStorage?.getItem("userId");
                if (!storedUser) {
                    router.push('/'); // Redirect if not authenticated
                } else {
                    setUserId(storedUser); // Set userId if authenticated
                }
            } catch {
                console.log("error")
                router.push('/');
            }
        };

        handleRedirect();
    })

    return (
        <div className="flex h-screen ">
            <SideNav onComponentChange={setActiveComponent} />
            <main className="md:flex-grow absolute md:relative z-0 p-10">
                {activeComponent && React.cloneElement(activeComponent, { userId })}
            </main>
        </div>
    );
}

export default Dashboard;