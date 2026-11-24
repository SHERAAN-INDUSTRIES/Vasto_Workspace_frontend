import React from 'react'
import Container from "../../Components/Container.tsx";
import Buttons from "../../Components/Buttons.tsx"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faDollar, faMessage, faUsers} from "@fortawesome/free-solid-svg-icons";
import logo from '../../../assets/brand/vasto-transparent.png'

function Sidebar():React.JSX.Element {
    function Sidebar():React.JSX.Element{
        return(
            <>
                <div className="flex p-2 flex-row gap-1">
                    <button className="h-full w-auto">
                        <img src={logo} alt="logo" className="h-15 w-15 bg-cover" />
                    </button>
                    <div className="gap-3.5">
                        <h1 className="font-heading text-lg font-bold">VASTO</h1>
                        <p>workspace</p>
                    </div>
                </div>
                <div className="flex justify-center items-center p-2">
                    <span className="w-[90%] h-0.5 bg-border rounded-full"></span>
                </div>
                <div className="h-[70%] w-full px-2 py-2.5 flex flex-col gap-6 items-center justify-start">
                    <div className="w-full grid grid-cols-1 gap-4">

                        <Buttons icon={faHouse} text={"Home"} typ={"side-bar"} func={():void=>alert("Home")}/>
                        <Buttons icon={faMessage} text={"Message"} typ={"side-bar"} func={():void=>alert("Message")}/>
                        <Buttons icon={faUsers} text={"Group"} typ={"side-bar"} func={():void=>alert("Group")}/>
                        <span className="text-sm w-full text-text-secondary">Workspace</span>
                        <Buttons icon={faHouse} text={"Home"} typ={"side-bar"} func={():void=>alert("Home")}/>
                        <Buttons icon={faHouse} text={"Home"} typ={"side-bar"} func={():void=>alert("Home")}/>
                        <Buttons icon={faHouse} text={"Home"} typ={"side-bar"} func={():void=>alert("Home")}/>
                        <Buttons icon={faHouse} text={"Home"} typ={"side-bar"} func={():void=>alert("Home")}/>
                        <Buttons icon={faHouse} text={"Home"} typ={"side-bar"} func={():void=>alert("Home")}/>

                    </div>

                    <div className="w-45 bg-glass/65 border border-glass-border rounded-input px-2.5 py-2.5 mx-0.5 mb-2.5 backdrop-blur-md hover:border-border-light hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all min-w-0">
                        <div className="text-s font-semibold text-text-primary mb-0.5 truncate">
                            Pro workspace
                        </div>
                        <div className="text-[0.6rem] text-text-muted mb-2 leading-snug line-clamp-2">Unlock AI agents,
                            unlimited docs &amp; team groups
                        </div>
                        <button className="w-full nav-item group relative flex justify-center items-center gap-2.5 px-2 py-2 rounded-input text-sm
                        font-medium text-text-secondary border border-transparent hover:bg-gradient-middle hover:text-text-primary hover:-translate-y-1
                        hover:cursor-pointer  transition-all duration-200 min-w-0">
                            <FontAwesomeIcon icon={faDollar}/> Upgrade now
                        </button>
                    </div>

                </div>

            </>
        )
    }
    return (
        <>
            <Container type={"side-bar"} element={Sidebar()}/>
        </>
    )
}

export default Sidebar;