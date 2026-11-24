import React from 'react'
import Sidebar from "./sidebar/Sidebar.tsx";
import Home from "./HomePage/Home.tsx";

function Dashboard():React.JSX.Element{
    return (
        <>
            <section className="h-dvh w-dvw relative bg-background-dark flex flex-row flex-nowrap gap-1 overflow-hidden">
                <aside className="h-100dvh text-text-primary p-2 relative">
                    <Sidebar />
                </aside>
                <section className="h-100dvh w-full text-text-primary p-2 relative">
                    <Home/>
                </section>
            </section>
        </>
    )
}

export default Dashboard;