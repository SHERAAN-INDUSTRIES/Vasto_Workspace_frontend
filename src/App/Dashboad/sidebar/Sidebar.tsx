import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import logo from '../../../assets/brand/vasto-transparent.png'

function Sidebar():React.JSX.Element {
    return (
        <>
            <section className="h-full flex flex-col items-center justify-start shadow-2xl">

                <div className="flex p-2 flex-row gap-2">
                    <button className="h-full w-full">
                        <img src={logo} alt="logo" className="h-15 w-20 bg-cover" />
                    </button>
                    <div className="gap-3.5">
                        <h1 className="font-heading text-lg font-bold">VASTO</h1>
                        <p>workspace</p>
                    </div>
                </div>

                <div className="h-[70%] w-full px-2 py-2.5 flex flex-col gap-6 items-center justify-start">
                    <button className="group flex flex-row w-auto py-3 px-4 rounded-3xl items-center justify-around
                     border border-gray-200 hover:-translate-y-1 hover:cursor-pointer focus:outline-none transition
                     duration-200 hover:rounded-sm hover:w-full hover:py-2">
                        <FontAwesomeIcon icon={faHouse}/> <span className="hidden group-hover:block">Home</span>
                    </button>
                    <button className="group flex flex-row w-auto gap-8 py-3 px-4 rounded-3xl items-center justify-around
                     border border-gray-200 hover:-translate-y-1 hover:cursor-pointer focus:outline-none transition
                     duration-200 hover:rounded-2xl">
                        <FontAwesomeIcon icon={faHouse}/> <span className="hidden group-hover:block">Home</span>
                    </button>
                </div>

            </section>
        </>
    )
}
export default Sidebar;