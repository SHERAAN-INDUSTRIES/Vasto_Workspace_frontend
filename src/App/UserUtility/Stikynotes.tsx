import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faClock} from "@fortawesome/free-solid-svg-icons";

function Stikynotes():React.JSX.Element{
    return(
        <section className="h-[80%] grid grid-cols-2 gap-2">

            <div className="w-full h-full rounded-2xl overflow-y-scroll scrollbar-none">

                <div className="flex flex-col justify-center items-center gap-8.5 p-1.5">

                    <div className="w-full sticky-note note-rotate-2 note-pop relative rounded-2xl p-4 bg-[#fce7f3] border border-pink-200/60">
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-pink-700/70 bg-pink-200/60 px-2 py-0.5 rounded-full">Idea</span>
                            <button onClick={():void=>{}} className="w-5 h-5 rounded flex items-center justify-center text-pink-700/50 hover:cursor-pointer hover:text-pink-800 transition-all">
                                <FontAwesomeIcon icon={faXmark}/>
                            </button>
                        </div>
                        <p className="text-xs font-medium text-pink-900 leading-relaxed">Add dark mode toggle to the
                            analytics dashboard.</p>
                        <p className="text-[10px] text-pink-700/60 mt-3 flex items-center gap-1"><FontAwesomeIcon icon={faClock}/> 4h ago</p>
                    </div>

                </div>

            </div>

            <div className="flex justify-center items-center p-2 ">

                <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] w-full max-w-md">

                    <form id="note-form" className="px-6 py-5 space-y-5">

                        <div>
                            <label htmlFor="note-title"
                                   className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                Title <span className="text-slate-400 font-normal normal-case">(optional)</span>
                            </label>
                            <input id="note-title" type="text"  placeholder="e.g. Review Q4 plan"
                                   className=" w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-all"/>
                        </div>

                        <div>
                            <label htmlFor="note-content"
                                   className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                Note content <span className="text-rose-500">*</span>
                            </label>
                            <textarea id="note-content"
                                      placeholder="Write your note here…"
                                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-all resize-none"></textarea>
                            <div className="flex items-center justify-between mt-1.5">
                                <p className="text-[11px] text-slate-400">Keep it short and actionable.</p>
                                <p className="text-[11px] text-slate-400"><span id="char-count">0</span>/240</p>
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
                                <button type="button"  data-color="pink"
                                        className="color-option w-9 h-9 rounded-xl bg-[#fce7f3] border-2 border-pink-300 transition-transform"
                                        title="Pink"></button>
                                <button type="button"  data-color="blue"
                                        className="color-option w-9 h-9 rounded-xl bg-[#dbeafe] border-2 border-blue-300 transition-transform"
                                        title="Blue"></button>
                                <button type="button"  data-color="green"
                                        className="color-option w-9 h-9 rounded-xl bg-[#dcfce7] border-2 border-green-300 transition-transform"
                                        title="Green"></button>
                                <button type="button"  data-color="violet"
                                        className="color-option w-9 h-9 rounded-xl bg-[#ede9fe] border-2 border-violet-300 transition-transform"
                                        title="Violet"></button>
                                <button type="button"  data-color="orange" className="color-option w-9 h-9 rounded-xl bg-[#ffedd5] border-2 border-orange-300 transition-transform" title="Orange"></button>
                            </div>
                        </div>


                        <div>
                            <label htmlFor="note-tag"
                                   className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                Tag
                            </label>
                            <select id="note-tag" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-all appearance-none cursor-pointer">
                                <option value="To-do">To-do</option>
                                <option value="Idea">Idea</option>
                                <option value="Reminder">Reminder</option>
                                <option value="Meeting">Meeting note</option>
                                <option value="Follow up">Follow up</option>
                                <option value="Quick note">Quick note</option>
                            </select>
                        </div>


                        <div className="flex items-center gap-3 pt-2">
                            <button type="reset" className="flex-1 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors">
                                Cancel
                            </button>
                            <button type="submit" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#fbbf24] text-amber-900 text-sm font-bold hover:bg-amber-300 transition-colors shadow-[0_4px_10px_rgba(251,191,36,0.35)]">
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