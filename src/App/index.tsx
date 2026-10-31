import img2 from '../assets/Students_Learning_Together.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faEnvelope, faLock,} from "@fortawesome/free-solid-svg-icons";

function Login(){
    return (
        <>
            <div className="h-full w-full flex justify-center items-center flex-col bg-black">
                <form className="h-full w-full flex justify-center items-center flex-col gap-3">

                    <div className="flex items-center justify-center flex-col gap-3">
                        <h1 className="text-3xl text-white font-bold">Sign in to WorkSpace</h1>
                        <p>Get started with us </p>
                        <div className="flex items-center justify-center flex-row gap-3">
                            <button className="border border-gray-500 rounded-2xl px-12 py-4">Google</button>
                            <button className="border border-gray-500 rounded-2xl px-12 py-4">Vasto</button>
                        </div>
                        <p>or</p>
                    </div>

                    <div className="h-1/2 w-10/12 flex justify-around items-center flex-col" >
                        <div className="flex justify-start items-start flex-col gap-2">
                            <label><FontAwesomeIcon icon={faUser}/> User Name</label>
                            <input type={"text"} placeholder={"John Doo"} className="py-1.5 px-2.5 bg-[white]
                            rounded-2xl text-gray-900 h-12 w-80"/>
                        </div>
                        <div className="flex justify-start items-start flex-col gap-2">
                            <label><FontAwesomeIcon icon={faEnvelope}/> Email</label>
                            <input type={"email"} placeholder={"P........m@gmail.com"} className="py-1.5 px-2.5 bg-[white]
                            rounded-2xl text-gray-900 h-12 w-80"/>
                        </div>
                        <div className="flex justify-start items-start flex-col gap-2">
                            <label><FontAwesomeIcon icon={faLock}/> Password</label>
                            <input type={"password"} placeholder={"Password"} className="py-1.5 px-2.5 bg-[white]
                            rounded-2xl text-gray-900 h-12 w-80"/>
                        </div>

                    </div>

                    <div className="w-10/13 flex justify-center items-center gap-5 flex-col">
                        <button type={"submit"} className="w-[50%] py-2 px-7 hover:cursor-pointer hover:bg-gray-700 hover:-translate-y-1 transition-all bg-gray-900 rounded-2xl text-white">Sign in</button>
                        <p>Don't have a Vasto account? <span className="text-white cursor-pointer">Sign up</span></p>
                    </div>

                </form>
            </div>
        </>
    )
}

function Loader(){
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