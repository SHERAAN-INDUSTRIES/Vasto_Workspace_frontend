import React, {type RefObject, useRef} from 'react'
import vastoLogo from '../../assets/brand/vasto-transparent.png'
import gsap from 'gsap';
import {SplitText} from "gsap/SplitText";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(SplitText)

function LoadingPage():React.JSX.Element{
    const container:RefObject<null> = useRef(null);
    useGSAP(():void=>{
        let split = SplitText.create(".loader",{type:"chars"})
        gsap.from(split.chars,{
            y:200,
            rotate:4,
            delay:1,
            autoAlpha:0,
            stagger:0.07,
            repeat:-1,
            yoyo:true
        })
    },{scope:container})
    return (
        <>
            <section ref={container} className="h-dvh w-dvw bg-background-dark overflow-hidden">
                <div className="flex justify-center items-center">
                    <div className="w-10/12 flex flex-row justify-start items-center gap-3 text-text-secondary py-4">
                        <img src={vastoLogo} alt="vastoLogo" className="w-15" />
                        <h2 className="font-heading font-bold">VASTO WORKSPACE</h2>
                    </div>
                </div>
                <div className=" flex flex-col items-center justify-center text-text-secondary">
                    <p className="text-2xl">WELCOME TO WORKSPACE</p>
                    <h1 className="loader text-barner font-bold">LOADING</h1>
                    <p>Loading your dashboard data ... </p>
                </div>
                <div className="w-80 h-40 p-4 flex flex-col items-start justify-center text-text-secondary">
                    <p>Collaborate, communicate and grow together as a community in vasto work place</p>
                </div>
            </section>
        </>
    )
}
export default LoadingPage;