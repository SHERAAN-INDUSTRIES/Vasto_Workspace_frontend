import React from "react";

type Props ={
    element:React.JSX.Element
}

function Slider({element}:Props):React.JSX.Element{
    return(
        <section className="absolute h-4/4 w-[99%] rounded-t-3xl bg-background-dark -translate-y-4/5 p-4 border border-border">

            <div className="w-full flex flex-col justify-center items-center p-1.5">
                <span className="h-0.5 w-1/12 bg-text-primary rounded-full"></span>
            </div>

            <main>
                {element}
            </main>

        </section>
    )
}

export default Slider