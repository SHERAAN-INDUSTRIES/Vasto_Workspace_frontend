import React from "react";

type ContainerProps = {
    type: string,
    element: React.JSX.Element
}

function Container({ type, element } : ContainerProps):React.JSX.Element{
    type Container = {
        element: React.JSX.Element
    }

    function  SideBarContainer({element}:Container):React.JSX.Element{
        return(
            <section className="h-full sidebar-glass sidebar-resizable relative flex flex-col shrink-0 rounded-panel
        bg-glass/55 backdrop-blur-glass border border-glass-border shadow-[0_8px_32px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]
        overflow-hidden overflow-y-scroll scrollbar-none">{element}</section>
        )
    }

    function AutoContainer({element}:Container):React.JSX.Element{
        return (
            <section className="h-auto w-auto sidebar-glass relative flex flex-col  shrink-0 rounded-panel
        bg-glass/55 backdrop-blur-glass border border-glass-border shadow-[0_8px_32px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]
        overflow-hidden scrollbar-none">{element}</section>
        )
    }
    function FullWidthContainer({element}:Container):React.JSX.Element{
        return (
            <section className="h-auto w-full sidebar-glass relative flex flex-col  shrink-0 rounded-panel
        bg-glass/55 backdrop-blur-glass border border-glass-border shadow-[0_8px_32px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]
        overflow-hidden overflow-x-scroll scrollbar-none">{element}</section>
        )
    }
    function FullHeightContainer({element}:Container):React.JSX.Element{
        return (
            <section className="h-full w-auto shrink-0 relative flex flex-col  rounded-panel
        bg-glass/55 backdrop-blur-glass border border-glass-border shadow-[0_8px_32px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]
        overflow-hidden overflow-y-scroll scrollbar-none">{element}</section>
        )
    }
    function FullContainer({element}:Container):React.JSX.Element{
        return (
            <section className="h-[98%] w-full shrink-0 relative flex flex-col  rounded-panel
        bg-glass/55 backdrop-blur-glass border border-glass-border shadow-[0_8px_32px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]
        overflow-y-scroll scrollbar-none">{element}</section>
        )
    }

    return(
        <>
            { type === "side-bar" && <SideBarContainer element={element}/> }
            { type === "auto" && <AutoContainer element={element}/> }
            { type === "full-width" && <FullWidthContainer element={element}/>}
            { type === "full-height" && <FullHeightContainer element={element}/>}
            { type === "full" && <FullContainer element={element}/>}
        </>
    )
}

export default Container