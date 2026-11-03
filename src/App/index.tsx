import React from "react";
import imgBrand from '../assets/brand/vasto-transparent.png'
import svgDivider from '../assets/svg_page_devider/intersecting-waves-scattered.svg'
import img2 from '../assets/Students_Learning_Together.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

type WorkspaceIdentity = {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    display_name: string;
    email: string;
    email_verified: boolean;
    profile_picture: string | null;
    status: string;
};

type AuthMeResponse = {
    status: string;
    message: string;
    authenticated: boolean;
    user: WorkspaceIdentity;
    session?: Record<string, unknown>;
};

function SignIn():React.JSX.Element {
    return (
        <>
            <div>
                <img className="absolute" src={svgDivider} alt="svg"/>
            </div>
            <div className="h-full w-full flex justify-center items-center flex-col bg-background-dark">
                <div className="h-full w-full flex justify-center items-center flex-col gap-8">

                    <div className="flex items-center justify-center flex-col gap-3">
                        <div className="flex items-center justify-center flex-col gap-3">
                            <img src={imgBrand} alt={"vasto"} height={60} width={60} />
                            <h1 className="text-3xl text-white font-bold">Sign in to WorkSpace</h1>
                            <p>Continue with your vasto account to Sign in to workspace</p>
                        </div>

                    </div>
                    <div>
                        <a href="/api/auth/vasto/start/" className="border hover:cursor-pointer
                            hover:-translate-y-2 transition-all flex justify-center items-center flex-row gap-3 group px-12 py-4 rounded-4xl bg-white
                            text-black border-gray-500">Continue With Vasto <FontAwesomeIcon className=" group-hover:translate-x-5 transition-all duration-150" icon={faLongArrowRight}/>
                        </a>
                    </div>
                    <div className="w-10/13 flex justify-center items-center gap-5 flex-col">
                        <p>Don't have a Vasto account? <span className="text-white cursor-pointer"><Link to={"https://Pwaninet.app/users/register/"} target={"_blank"}>Sign up</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

function Login():React.JSX.Element {
    const [authState, setAuthState] = React.useState<'checking' | 'signed-in' | 'signed-out' | 'error'>('checking');
    const [authResponse, setAuthResponse] = React.useState<AuthMeResponse | null>(null);

    React.useEffect(() => {
        const controller = new AbortController();

        fetch('/api/auth/me/', {
            credentials: 'same-origin',
            headers: { Accept: 'application/json' },
            signal: controller.signal,
        })
            .then(async (response) => {
                if (response.status === 401) {
                    setAuthState('signed-out');
                    return;
                }
                if (!response.ok) {
                    throw new Error(`Session check failed (${response.status}).`);
                }

                const data: AuthMeResponse = await response.json();
                if (!data.authenticated || !data.user) {
                    setAuthState('signed-out');
                    return;
                }

                setAuthResponse(data);
                setAuthState('signed-in');
            })
            .catch((error: unknown) => {
                if (error instanceof Error && error.name === 'AbortError') return;
                setAuthState('error');
            });

        return () => controller.abort();
    }, []);

    if (authState === 'signed-out') return <SignIn />;

    return (
        <div className="h-full w-full flex justify-center items-center flex-col bg-background-dark px-8">
            <div className="flex max-w-lg flex-col items-center gap-4 text-center">
                <img src={imgBrand} alt="Vasto" height={60} width={60} />
                {authState === 'checking' && <p role="status">Checking your Workspaces sign-in…</p>}
                {authState === 'signed-in' && authResponse && (
                    <>
                        {authResponse.user.profile_picture && (
                            <img
                                className="h-20 w-20 rounded-full object-cover"
                                src={authResponse.user.profile_picture}
                                alt={`${authResponse.user.display_name || authResponse.user.username} profile`}
                            />
                        )}
                        <h1 className="text-3xl text-white font-bold">You’re signed in to Workspaces</h1>
                        <p>Authenticated response (session details hidden for this preview):</p>
                        <pre className="w-full max-w-3xl overflow-auto rounded-lg bg-black/40 p-4 text-left text-xs text-green-200">
                            {JSON.stringify(
                                Object.fromEntries(
                                    Object.entries(authResponse).filter(([key]) => key !== 'session')
                                ),
                                null,
                                2
                            )}
                        </pre>
                    </>
                )}
                {authState === 'error' && (
                    <>
                        <h1 className="text-3xl text-white font-bold">Could not check your sign-in</h1>
                        <p>Make sure the Workspaces backend is running, then try again.</p>
                        <button className="btn btn-primary" onClick={() => window.location.reload()}>Try again</button>
                    </>
                )}
            </div>
        </div>
    );
}

function Loader():React.JSX.Element {
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
