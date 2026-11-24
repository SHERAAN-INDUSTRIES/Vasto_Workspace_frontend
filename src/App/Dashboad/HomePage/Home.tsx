import React from "react";
import Container from "../../Components/Container.tsx";
import Stikynotes from "../../UserUtility/Stikynotes.tsx";
import Slider from "../../Components/Slider.tsx";
import {DataCard} from "../../Components/Cards.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faShare, faGear, faPlus, faFolder, faXmark} from "@fortawesome/free-solid-svg-icons";
import img from "../../../assets/Earth.jpeg"

function HomeDiv():React.JSX.Element{
    const date:string = new Date().toDateString()
    const time:string = new Date().toLocaleTimeString()
    return (
        <main>

            <section className="w-full h-auto flex flex-col justify-center items-center relative z-10 p-2">

                <div className="rounded-full [backdrop-filter:url(#glass)]
                 w-full h-17 flex flex-row justify-between items-center p-4">
                    <input type={"search"} id={"search-input"} placeholder={"search e.g Documents"}
                    className="w-2/5 h-[80%] bg-surface-tertiary text-text-secondary px-2.5 py-4 rounded-2xl border border-border
                    focus:border-border-light active:border-border-light focus:outline-none focus:ring-0"
                    />
                    <div className="w-full h-20 flex justify-end items-center gap-13 text-text-secondary ">
                        <div className="bg-surface-tertiary text-text-secondary px-4.5 py-2.5 rounded-full grid grid-cols-3 gap-6">
                            <button className="hover:text-text-primary hover:-translate-y-1 hover:cursor-pointer transition-all"><FontAwesomeIcon icon={faBell}/></button>
                            <button className="hover:text-text-primary hover:-translate-y-1 hover:cursor-pointer transition-all"><FontAwesomeIcon icon={faShare}/></button>
                            <button className="hover:text-text-primary hover:-translate-y-1 hover:cursor-pointer transition-all"><FontAwesomeIcon icon={faGear}/></button>
                        </div>
                        <img src={img} alt={"profile-pic"} className="h-[1cm] w-[1cm] rounded-full"/>
                    </div>
                </div>

            </section>

            <section className="w-full h-[80dvh] relative -mt-22 rounded-b-4xl overflow-hidden shadow-2xl shadow-text-disabled">

                <div className="relative h-full w-full overflow-hidden">
                    <img src={img} alt={"bg-img"} className="w-full h-full absolute"/>
                    <div className="absolute w-full h-full grid grid-cols-2 gap-2 bg-linear-to-r from-none via-none to-glass">
                        <div className="w-full h-full flex flex-col justify-center items-center p-4 text-text-primary">
                            <h1 className="text-7xl font-bold">WORKSPACE</h1>
                            <p className="text-lg"><span className="text-xl font-bold">Promise-x</span> Workspace Dashboard</p>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center items-center p-4">
                            <svg className="absolute -z-10">
                                <filter id={"glass"}>
                                    <feTurbulence
                                        type={"fractalNoise"}
                                        baseFrequency={"0.0000 0.0102"}
                                        numOctaves={"2"}
                                        result={"noise"}
                                    />
                                    <feDisplacementMap
                                        in={"SourceGraphic"}
                                        in2={"noise"}
                                        scale={"25"}
                                    />
                                </filter>
                            </svg>
                            <div className="h-3/4 w-full bg-glass-transparent backdrop-blur-lg rounded-3xl p-4 [backdrop-filter:url(#glass)] grid grid-cols-2">
                                <div className="flex flex-col justify-evenly items-center">
                                    <img src={img} alt={"profile-pic"} className="h-45 w-45 rounded-full"/>
                                </div>
                                <div className="flex flex-col justify-evenly items-center">
                                    <div className="flex flex-col gap-1.5">
                                        <h1 className="text-2xl text-text-primary font-bold">Promise-x</h1>
                                        <h2 className="text-sm text-text-primary">promisendegwa@gmail.com</h2>
                                        <p className="text-sm text-text-primary">Student at NVTC</p>
                                        <p className="text-sm text-text-primary">http://promise.com</p>
                                        <p className="text-xs text-text-secondary">This is a text of what i fell and what i do stay alive</p>
                                    </div>
                                </div>
                                <div className="p-4 col-start-1 col-end-3 row-start-2 row-end-3 bg-text-primary rounded-2xl">
                                    <p className="text-sm text-text-secondary">{date}</p>
                                    <h1 className="text-5xl text-glass font-bold">{time}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="h-auto w-full mt-15 p-4 flex flex-col justify-center items-center gap-3.5">
                <div className="p-2.5 w-full h-auto">
                    <h1 className="text-text-primary font-bold text-xl">Workspace Overview</h1>
                    <p className="w-1/4 text-[0.7rem]">The cards bellow provide an essential over view data collection of your work space that is updated in real time</p>
                </div>
                <div className="w-full h-auto flex flex-row flex-wrap justify-evenly items-center">

                    <DataCard/>
                    <DataCard/>
                    <DataCard/>
                    <DataCard/>

                </div>
            </section>

            <section className="w-full p-4 flex flex-col gap-8.5">
                <div className="p-2.5 w-full h-auto">
                    <h1 className="text-text-primary font-bold text-xl">Workspace Quick Links</h1>
                    <p className="w-1/4 text-[0.7rem]">Create short cut links to navigate through workspace</p>
                </div>
                <div className="flex flex-row flex-wrap justify-start items-center p-2.5 gap-4.5">

                    <button className="hover:cursor-pointer w-1/9 quick-link group flex flex-col items-center justify-center gap-3 hover:bg-text-secondary transition-all bg-text-primary rounded-2xl px-7 py-5 border border-text-secondary shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:text-glass">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl group-hover:bg-text-primary  bg-text-secondary text-glass group-hover:scale-105 transition-transform">
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                        <span className="text-[13px] font-medium text-slate-600 text-center leading-tight">New</span>
                    </button>

                    <button className="relative hover:cursor-pointer w-1/9 quick-link group flex flex-col items-center justify-center gap-3 hover:bg-text-secondary transition-all bg-white rounded-2xl px-7 py-5 border border-text-secondary shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:text-glass">
                        <div className="absolute w-full flex justify-end items-end -translate-y-10 p-1.5 opacity-0 group-hover:opacity-[1] transition-all">
                            <button className="hover:text-text-primary"><FontAwesomeIcon icon={faXmark}/></button>
                        </div>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl group-hover:bg-text-primary bg-text-secondary text-glass  group-hover:scale-105 transition-transform">
                            <FontAwesomeIcon icon={faFolder}/>
                        </div>
                        <span className="text-[13px] font-medium text-slate-600 text-center leading-tight">Upload File</span>
                    </button>

                </div>

            </section>

            <section className="w-full h-auto flex flex-col gap-8.5 p-2.5 mt-2.5">

                <div className="p-2.5 w-full h-auto">
                    <h1 className="text-text-primary font-bold text-xl">Workspace Project Overview</h1>
                    <p className="w-1/4 text-[0.7rem]">The table bellow displays an over view of your projects on the vasto workspace</p>
                </div>

                <div className="overflow-x-auto bg-text-primary w-full rounded-2xl">
                    <table className="w-full">
                        <thead className="border-b border-text-secondary">
                        <tr className="text-left text-[11px] font-semibold text-glass uppercase tracking-wider">
                            <th className="px-6 py-3">Project</th>
                            <th className="px-6 py-3">Team</th>
                            <th className="px-6 py-3">Date Created</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                        <tr className="group bg-text-primary hover:bg-text-secondary transition-colors border-b border-border-light">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <p className="text-sm font-semibold text-[#0b1a2b]">Website redesign</p>
                                        <p className="text-xs group-hover:text-text-primary text-slate-400">Marketing</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center w-full">
                                    <img src={img} alt={"profile"} className="w-7 h-7 rounded-full  ring-2 ring-white -ml-3 hover:-translate-x-0.5 transition-transform"/>
                                    <img src={img} alt={"profile"} className="w-7 h-7 rounded-full  ring-2 ring-white -ml-3 hover:-translate-x-0.5 transition-transform"/>
                                    <img src={img} alt={"profile"} className="w-7 h-7 rounded-full  ring-2 ring-white -ml-3 hover:-translate-x-0.5 transition-transform"/>
                                    <img src={img} alt={"profile"} className="w-7 h-7 rounded-full  ring-2 ring-white -ml-3 hover:-translate-x-0.5 transition-transform"/>
                                    <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-[10px] flex items-center justify-center font-semibold ring-2 ring-white -ml-2">+3</span>
                                </div>
                            </td>

                            <td className="px-6 py-4 text-sm text-slate-600">Dec 5, 2026</td>

                        </tr>
                        </tbody>
                    </table>
                </div>

            </section>

            <section className="sticky bottom-0.5 w-full h-auto flex justify-center items-center p-2.5 gap-2">
                <div className="flex justify-around items-center gap-6 p-4 bg-glass-transparent backdrop-blur-lg [backdrop-filter:url(#glass)] rounded-full text-lg inset-0.5 shadow-inner shadow-text-secondary">
                    <button className="text-glass hover:text-text-primary hover:bg-surface-tertiary hover:-translate-y-1 hover:cursor-pointer transition-all bg-text-primary p-2 rounded-full"><FontAwesomeIcon icon={faBell}/></button>
                    <button className="text-glass hover:text-text-primary hover:bg-surface-tertiary hover:-translate-y-1 hover:cursor-pointer transition-all bg-text-primary p-2 rounded-full"><FontAwesomeIcon icon={faShare}/></button>
                    <button className="text-glass hover:text-text-primary hover:bg-surface-tertiary hover:-translate-y-1 hover:cursor-pointer transition-all bg-text-primary p-2 rounded-full"><FontAwesomeIcon icon={faGear}/></button>
                </div>
                <div className="flex justify-around items-center p-4 bg-glass-transparent backdrop-blur-lg [backdrop-filter:url(#glass)] rounded-full text-lg inset-0.5 shadow-inner shadow-text-secondary">
                    <button className="text-glass hover:text-text-primary hover:bg-surface-tertiary hover:-translate-y-0.5 hover:cursor-pointer transition-all bg-text-primary p-2 rounded-full"><FontAwesomeIcon icon={faBell}/></button>
                </div>
            </section>

        </main>
    )
}

function Home(): React.JSX.Element {
    return(
        <div className="h-dvh">
            <Container type={"full"} element={HomeDiv()}/>
            <Slider element={<Stikynotes/>}/>
        </div>
    )
}

export default Home