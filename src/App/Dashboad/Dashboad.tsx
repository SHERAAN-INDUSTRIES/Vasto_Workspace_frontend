import React from 'react'
import Sidebar from "./sidebar/Sidebar.tsx";

function Dashboard():React.JSX.Element{
    return (
        <>
            <section className="h-dvh w-dvw relative bg-background-dark flex flex-row ">
                <aside className="text-text-primary p-2">
                    <Sidebar />
                </aside>
                <section className="h-full w-full relative">

                </section>
            </section>
        </>
    )
}

export default Dashboard;