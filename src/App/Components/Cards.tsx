import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export function DataCard():React.JSX.Element{
    return(
        <div className="group stat-card-accent-meetings relative flex flex-col bg-text-primary rounded-3xl p-6 border border-slate-200/70 shadow-[0_8px_20px_rgba(0,0,0,0.02),0_2px_6px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_30px_-8px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.02)] hover:border-emerald-500/20 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
                <div className="-translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-[1] transition-all w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-emerald-500/10  text-glass-light">
                    <FontAwesomeIcon icon={faVideo}/>
                </div>
                <div
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-text-primary text-glass-light">
                    <i className="fas fa-arrow-up text-[10px]"></i> +3
                </div>
            </div>
            <h1 className="transition-all text-5xl -translate-y-15 group-hover:text-4xl group-hover:translate-y-0 font-bold tracking-tight text-[#0b1a2b] leading-none mb-2">9</h1>
            <h1 className="text-sm font-bold text-glass tracking-wide">Meetings this week</h1>
            <div className="translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-[1] transition-all flex items-center gap-1.5 mt-3 text-[13px] text-slate-400">
                <p>Next: Today 2:30 PM</p>
            </div>
        </div>
    )
}