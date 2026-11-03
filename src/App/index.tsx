import React from "react";
import imgBrand from '../assets/brand/vasto-transparent.png'
import svgDivider from '../assets/svg_page_devider/intersecting-waves-scattered.svg'
import img2 from '../assets/Students_Learning_Together.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function SignIn():React.JSX.Element {
    return (
        <>
            <div>
                <img className="absolute" src={svgDivider} alt="svg"/>
            </div>
            <div className="h-full w-full flex justify-center items-center flex-col bg-background-dark">
                <div className="h-full w-full flex justify-center items-center flex-col gap-8">

                    <div className="flex items-center justify-center flex-col gap-3">
                        <div className="flex items-center justify-center flex-col gap-3">
                            <img src={imgBrand} alt={"vasto"} height={60} width={60} />
                            <h1 className="text-3xl text-white font-bold">Sign in to WorkSpace</h1>
                            <p>Continue with your vasto account to Sign in to workspace</p>
                        </div>

                    </div>
                    <div>
                        <Link to={"http://127.0.0.1:8000/workspace/sync/"} target={'_blank'} className="border hover:cursor-pointer
                            hover:-translate-y-2 transition-all flex justify-center items-center flex-row gap-3 group px-12 py-4 rounded-4xl bg-white
                            text-black border-gray-500">Continue With Vasto <FontAwesomeIcon className=" group-hover:translate-x-5 transition-all duration-150" icon={faLongArrowRight}/>
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

function Login():React.JSX.Element {
    return <SignIn />;
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
