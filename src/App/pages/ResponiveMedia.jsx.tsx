import React from 'react'
import Phone from '../../assets/devices/iphone.png'
import Laptop from '../../assets/devices/mac_book.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLeftRight} from "@fortawesome/free-solid-svg-icons";

function OnMobile():React.JSX.Element{
    return (
        <>
            <section className="h-dvh w-dvw flex justify-center items-center">
                <div className="h-1/2 flex justify-around items-center flex-col">
                    <h1>Looks like you are on mobile Device!</h1>
                    <div className="grid grid-cols-3">
                        <img src={Phone} alt="phone" className="w-50 h-50"/>
                        <div className="flex justify-around items-center flex-col">
                            <h1 className="text-2xl"><FontAwesomeIcon icon={faLeftRight}/></h1>
                        </div>
                        <img src={Laptop} alt="laptop" className="w-50 h-50"/>
                    </div>
                    <p className="text-center">
                        Use your browser desktop mode to switch into desktop mode view to access your workspace
                    </p>
                </div>
            </section>
        </>
    )
}

export default OnMobile