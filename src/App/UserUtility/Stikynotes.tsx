import React, {useRef, useState} from "react";
import {Colors} from "./cardColors.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faClock, faNoteSticky} from "@fortawesome/free-solid-svg-icons";

function Stikynotes():React.JSX.Element{
    const color = new Colors()

    const titleInput:any = useRef<HTMLInputElement>(null)
    const textInput:any = useRef<HTMLInputElement>(null)
    const form:any = useRef<HTMLFormElement>(null)

    type colors = {
        bgContainer:string,
        borderColor:string,
        titleText:string,
        titleBg:string,
        iconColor:string,
        iconHoverColor:string,
        paragraghColor:string,
        timeColor:string
    }
    type data = {
        title:string,
        text:string,
        date:string,
        color:colors
    }

    const stikyData:data[] = [{
        title:"wow",
        text:"this is so cool man",
        date:new Date().toDateString(),
        color:{
            bgContainer:"bg-pink-100",
            borderColor:"border-pink-200/60",
            titleText:"text-pink-700/70",
            titleBg:"bg-pink-200/60",
            iconColor:"text-pink-700/50",
            iconHoverColor:"hover:text-pink-800",
            paragraghColor:"text-pink-800/60",
            timeColor:"text-pink-700/60"
        }
    }]

    const [count, setCount] = useState<number>(0)
    const [data, setData] = useState<object>({})


    function Change():void{
        let num:number = textInput.current?.value.length
        setCount(num)
    }

    function FormSubmition(e:any):void{
        e.preventDefault()
        const title:any = titleInput.current?.value
        const text:any = textInput.current?.value
        const date:string = new Date().toDateString()

        if (text !== " " ){
            setData((prev)=>(prev =
                    {
                        title:title,
                        text:text,
                        date:date,
                        color:color.Yellow()
                    }
            ))
        }
        console.log(data)
        form.current?.reset()
    }


    function DivCard({title,text,date,color}:data):React.JSX.Element{

        return(

                <div className={`w-full sticky-note note-rotate-2 note-pop relative rounded-2xl p-4 ${color.bgContainer} border ${color.borderColor}`}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${color.titleText} ${color.titleBg} px-2 py-0.5 rounded-full`}>{title}</span>
                        <button onClick={():void=>{}} className={`w-5 h-5 rounded flex items-center justify-center ${color.iconColor} hover:cursor-pointer ${color.iconHoverColor} transition-all`}>
                            <FontAwesomeIcon icon={faXmark}/>
                        </button>
                    </div>
                    <p className={`${color.paragraghColor} text-xs font-medium leading-relaxed`}>{text}</p>
                    <p className={`text-[10px] ${color.timeColor} mt-3 flex items-center gap-1`}><FontAwesomeIcon icon={faClock}/> {date}</p>
                </div>

        )
    }



    return(
        <section className="h-[75vh] grid grid-cols-2 gap-2">

            <div className="w-full h-full rounded-2xl overflow-y-scroll scrollbar-none">

                <div className="flex flex-col justify-center items-center gap-8.5 p-1.5">
                    {
                        stikyData.map(data=>(
                            <DivCard
                                key={data.title}
                                title={data.title}
                                text={data.text}
                                date={data.date}
                                color={data.color}
                            />
                        ))
                    }

                </div>

            </div>

            <div className="flex justify-center items-center p-2">

                <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] w-full max-w-md">
                    <div className="px-5 py-5">
                        <h2 className="text-xl font-bold text-[#0b1a2b] tracking-tight flex items-center gap-2">
                            <span className="text-glass"><FontAwesomeIcon icon={faNoteSticky}/> Sticky notes</span>
                        </h2>
                        <p className="text-sm text-slate-500 mt-0.5">Quick thoughts ·</p>
                    </div>

                    <form id="note-form" ref={form} onSubmit={FormSubmition} className="h-3/8 px-6 py-5 space-y-5">

                        <div>
                            <label htmlFor="note-title"
                                   className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                Title <span className="text-slate-400 font-normal normal-case">(optional)</span>
                            </label>
                            <input ref={titleInput} id="note-title" type="text" placeholder="e.g. Review Q4 plan"
                                   className=" w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-all"/>
                        </div>

                        <div>
                            <label htmlFor="note-content"
                                   className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                Note content <span className="text-rose-500">*</span>
                            </label>
                            <textarea ref={textInput} onChange={Change} id="note-content"
                                      placeholder="Write your note here…"
                                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 scrollbar-none transition-all resize-none"/>
                            <div className="flex items-center justify-between mt-1.5">
                                <p className="text-[11px] text-slate-400">Keep it short and actionable.</p>
                                <p className="text-[11px] text-slate-400"><span>{count}</span>/240</p>
                            </div>
                        </div>

                        <div>
                            <label
                                className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                Note color
                            </label>
                            <div className="flex items-center gap-3">
                                <button type="button" data-color="yellow"
                                        className="color-option active w-9 h-9 rounded-xl bg-[#fef9c3] border-2 border-yellow-300 transition-transform"
                                        title="Yellow"></button>
                                <button type="button" data-color="pink"
                                        className="color-option w-9 h-9 rounded-xl bg-[#fce7f3] border-2 border-pink-300 transition-transform"
                                        title="Pink"></button>
                                <button type="button" data-color="blue"
                                        className="color-option w-9 h-9 rounded-xl bg-[#dbeafe] border-2 border-blue-300 transition-transform"
                                        title="Blue"></button>
                                <button type="button" data-color="green"
                                        className="color-option w-9 h-9 rounded-xl bg-[#dcfce7] border-2 border-green-300 transition-transform"
                                        title="Green"></button>
                                <button type="button" data-color="violet"
                                        className="color-option w-9 h-9 rounded-xl bg-[#ede9fe] border-2 border-violet-300 transition-transform"
                                        title="Violet"></button>
                                <button type="button" data-color="orange"
                                        className="color-option w-9 h-9 rounded-xl bg-[#ffedd5] border-2 border-orange-300 transition-transform"
                                        title="Orange"></button>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <button type="reset"
                                    className="flex-1 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 hover:cursor-pointer hover:-translate-y-1.5 transition-all">
                                Cancel
                            </button>
                            <button type="submit"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-glass text-sm font-bold hover:bg-glass-light hover:cursor-pointer hover:-translate-y-1.5 text-text-primary transition-all">
                                Add note
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </section>
    )
}

export default Stikynotes