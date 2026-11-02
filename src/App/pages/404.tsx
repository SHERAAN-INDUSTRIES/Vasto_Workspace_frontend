import React, {type RefObject, useRef} from 'react'
import Eath from '../../assets/Earth.jpeg'
import Astrunat from '../../assets/Astronaut.png'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react";

function FourOhFour():React.JSX.Element {
    const containerRef:RefObject<null> = useRef(null);
    useGSAP(():void => {
        let time = gsap.timeline({yoyo:true})
        time.from(".astronut", {
            x:"200%",
            y:"-25%",
            duration:200,
            delay:1,
        })
            .to(".astronut",{
                x:"400%",
                y:"50%",
                duration:200,
                delay:1
            })
    },{scope:containerRef})
    return (
        <>
            <section ref={containerRef} className="h-dvh w-dvw relative">
                <img src={Eath} alt="Eath" className="w-full h-full absolute -z-10" />
                <div className="h-full w-full overflow-hidden">
                    <div className="flex items-center justify-space-around">
                        <img src={Astrunat} alt="astrunat" className="astronut w-100 h-100" />
                        <div className="w-full h-full py-2.5 px-6 flex items-end flex-col justify-center my-7 overflow-hidden">
                            <h1 className="text-white text-6xl w-[70%]">OOPS! Looks Like you are lost in Space</h1>
                            <h1 className="text-white text-media font-bold">404</h1>
                            <p className="text-white text-2xl w-[60%]">The page you are trying to visit is either moved to another url or does not exist in this path. try going back to your previous page to get back on earth</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FourOhFour;