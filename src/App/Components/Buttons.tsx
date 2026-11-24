import React from "react";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type button<T> = {
    icon:IconDefinition,
    text:string,
    typ:string,
    func:T
}

function Buttons({icon,text,typ,func}:button<any>):React.JSX.Element{

    type btn<T> = {
        icon:IconDefinition,
        text:string,
        func:T
    }

    function SideBarButton({icon,text,func}:btn<any>):React.JSX.Element{
        return(
            <>
                <button onClick={func} className="w-full nav-item group relative flex justify-center items-center gap-2.5 px-2 py-2 rounded-input text-sm
                     font-medium text-text-secondary border border-transparent hover:bg-glass/75 hover:border-glass-border focus:text-text-primary
                     hover:text-text-primary focus:bg-glass/75 focus:border-glass-border hover:cursor-pointer hover:-translate-y-1 transition-all duration-200 min-w-0">
                    <FontAwesomeIcon icon={icon}/>
                    <span className="flex-1 truncate min-w-0">{text}</span>
                </button>
            </>
        )
    }

    return(
        <>
            { typ === "side-bar" && <SideBarButton icon={icon} text={text} func={func}/> }
        </>
    )
}

export default Buttons;