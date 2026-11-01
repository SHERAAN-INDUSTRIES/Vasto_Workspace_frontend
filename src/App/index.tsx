import React from "react";
import img2 from '../assets/Students_Learning_Together.jpeg'
import google from '../assets/google.png'
import vasto from '../assets/vasto-transparent.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Login():React.JSX.Element {
    return (
        <>
            <div className="h-full w-full flex justify-center items-center flex-col bg-black">
                <div className="h-full w-full flex justify-center items-center flex-col gap-3">

                    <div className="flex items-center justify-center flex-col gap-8">
                        <div className="flex items-center justify-center flex-col gap-3">
                            <h1 className="text-3xl text-white font-bold">Sign in to WorkSpace</h1>
                            <p>Continue to work space with </p>
                        </div>
                        <div className="flex items-center justify-center flex-row gap-3">
                            <button className="border hover:cursor-pointer hover:-translate-y-1 transition-all border-gray-500
                            flex flex-row gap-3 rounded-2xl px-12 py-4"><img src={google} alt={"google logo"} height="25cm" width="25cm"/> Google</button>
                            <button className="border hover:cursor-pointer hover:-translate-y-1 transition-all border-gray-500
                            flex flex-row gap-3 rounded-2xl px-12 py-4"><img src={vasto} alt={" logo"} height="25cm" width="25cm"/> Vasto</button>
                        </div>
                        <p>or</p>
                    </div>
                    <div>
                        <Link to={"http://127.0.0.1:8000/accounts/login?workspace=true/"} target={"_blank"}>
                            <button className="border hover:cursor-pointer
                            hover:-translate-y-1 transition-all px-12 py-4 rounded-4xl bg-white
                            text-black border-gray-500">Continue With Vasto <FontAwesomeIcon icon={faLongArrowRight}/>
                            </button>
                        </Link>
                    </div>
                    <div className="w-10/13 flex justify-center items-center gap-5 flex-col">
                        <p>Don't have a Vasto account? <span className="text-white cursor-pointer"><Link to={"https://Pwaninet.app/users/register/"} target={"_blank"}>Sign up</Link></span></p>
                    </div>

                </div>
            </div>
        </>
    )
}

function Loader():React.JSX.Element {
    return(
        <>
            <section className="h-dvh w-full grid grid-cols-2 gap-0 text-[15px] relative text-gray-400">
                <div className="h-full w-full flex justify-start items-center relative overflow-hidden">
                    <img src={img2} alt={"bg-img"} className="h-full w-full absolute object-cover object-center z-[-1] brightness-40" />
                    <div className="h-1/2 w-full flex justify-start items-center flex-row">
                        <div className="h-2/3 w-full flex justify-end items-end flex-col gap-3 p-2 relative overflow-hidden">
                            <h1 className="text-6xl w-[70%] font-bold text-white border-b-8 uppercase ">Vasto WorkSpace</h1>
                            <p className="w-[70%] ">It's a all in one workplace every thing you need is all in here get started now and be make your work easier and faster by a click of button</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Login />
                </div>
            </section>
        </>
    )
}

export default Loader