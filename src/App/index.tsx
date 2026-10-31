import img2 from '../assets/Students_Learning_Together.jpeg'

function Login(){
    return (
        <>
            <div className="h-full w-full flex justify-center items-center flex-col">
                <form >
                    <div>
                        <h1>Begin your journey with <span>VASTO WORKSPACE</span></h1>
                    </div>
                    <div>
                        <input type={"text"} placeholder={"User Name"} />
                        <input type={"text"} placeholder={"Email"} />
                        <input type={"text"} placeholder={"Password"} />
                    </div>
                </form>
            </div>
        </>
    )
}

function Loader(){
    return(
        <>
            <section className="h-dvh w-full grid grid-cols-2 gap-0">
                <div className="h-full w-full flex justify-start items-center relative overflow-hidden">
                    <img src={img2} alt={"bg-img"} className="h-full w-auto absolute object-cover object-center z-[-1] brightness-40" />
                    <div className="h-1/2 w-full flex justify-start items-center flex-row">
                        <div className="h-2/3 w-full flex justify-end items-end flex-col gap-3 p-2">
                            <h1 className="text-5xl w-[70%] font-bold text-white border-b-8 uppercase">Vasto WorkSpace</h1>
                            <p className="w-[70%] text-1xl">It's a all in one workplace every thing you need is all in here get started now and be make your work easier and faster by a click of button</p>
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