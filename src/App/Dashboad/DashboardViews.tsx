import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faMicrophone, faShareNodes, faComments, faPaperPlane, faFolder, faBell, faCalendar, faCode } from "@fortawesome/free-solid-svg-icons";
import type { WorkspaceView } from "./sidebar/Sidebar";

export type BottomSheetType = "uploadFiles" | "createMeeting" | "createChatServer" | "createProject";

type Props = {
    activeView: WorkspaceView;
    onOpenSheet: (type: BottomSheetType) => void;
};

const panel = "rounded-panel border border-glass-border bg-[#091225]/90";
const title = "text-xl md:text-2xl font-heading font-bold";

function PageHeading({ name }: { name: string }) {
    return (
        <div className="mb-5">
            <h1 className={title}>{name}</h1>
            <p className="mt-1 text-xs text-text-muted">Workspace / {name}</p>
        </div>
    );
}

function HomeView({ onOpenSheet }: Pick<Props, "onOpenSheet">) {
    const stats = [
        { label: "Projects", value: "05" },
        { label: "Team members", value: "05" },
        { label: "Messages", value: "05" },
        { label: "Documents", value: "05" },
    ];
    const activities = ["Website redesign updated", "New team member joined", "Document shared", "Meeting scheduled"];

    // TODO: Replace with real workspace overview data from backend
    return (
        <section>
            <PageHeading name="Home dashboard" />
            <div className={`${panel} p-5 mb-4`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="font-heading font-bold">Welcome back</h2>
                        <p className="mt-2 text-sm text-text-secondary">Your workspace at a glance</p>
                    </div>
                    <button type="button" onClick={() => onOpenSheet("createProject")} className="h-10 px-4 rounded-input border border-vasto-blue/40 text-sm">Create project</button>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {stats.map((stat) => (
                    <div key={stat.label} className={`${panel} p-4 h-28 flex flex-col justify-between`}>
                        <p className="text-sm text-text-secondary">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-4">
                <div className={`${panel} p-4`}>
                    <h2 className="font-heading font-bold mb-4">Quick actions</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {["Ask AI", "Open editor", "Join meeting", "New document"].map((action) => (
                            <button key={action} type="button" className="h-12 rounded-input border border-glass-border text-left px-4 text-sm hover:border-vasto-blue/50">{action}</button>
                        ))}
                        <button type="button" onClick={() => onOpenSheet("uploadFiles")} className="h-12 rounded-input border border-glass-border text-left px-4 text-sm hover:border-vasto-blue/50">Upload files</button>
                    </div>
                </div>
                <div className={`${panel} p-4`}>
                    <h2 className="font-heading font-bold mb-4">Recent activity</h2>
                    <div className="space-y-3">
                        {activities.map((activity) => (
                            <div key={activity} className="h-10 border-b border-glass-border text-xs text-text-muted flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full border border-vasto-cyan" />
                                {activity}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function AssistantView() {
    const [prompt, setPrompt] = useState("");
    const chats = ["Product strategy", "Meeting recap", "Project planning", "Landing page copy"];

    // TODO: Replace with real data from backend
    return (
        <section>
            <PageHeading name="AI Assistant" />
            <div className="grid lg:grid-cols-[1fr_260px] gap-4 h-[calc(100%-70px)]">
                <div className={`${panel} p-5 flex flex-col min-h-[540px]`}>
                    <h2 className="font-heading font-bold mb-5">Conversation</h2>
                    <div className="max-w-[650px]">
                        <p className="font-semibold mb-3">Assistant response</p>
                        <div className="space-y-2">
                            <div className="h-2 rounded-full bg-glass-light w-full" />
                            <div className="h-2 rounded-full bg-glass-light w-5/6" />
                            <div className="h-2 rounded-full bg-glass-light w-4/6" />
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className={`${panel} mb-3 p-4 text-sm text-text-muted`}>Your prompt / message</div>
                        <div className={`${panel} h-14 flex items-center px-3`}>
                            <input value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="Ask anything..." className="flex-1 bg-transparent outline-none text-sm" />
                            <button type="button" className="h-9 px-4 rounded-input border border-vasto-blue/40">Send</button>
                        </div>
                    </div>
                </div>
                <div className={`${panel} p-4`}>
                    <h2 className="font-heading font-bold mb-4">Recent chats</h2>
                    {chats.map((chat) => (
                        <button key={chat} type="button" className="w-full h-16 text-left text-sm border-b border-glass-border text-text-secondary">
                            <span className="mr-3 h-2 w-2 inline-block rounded-full border border-vasto-cyan" />{chat}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CodeView() {
    // TODO: Replace with real data from backend
    const files = ["src", "components", "pages", "App.jsx", "index.css", "public", "package.json"];
    return (
        <section>
            <PageHeading name="Code Editor" />
            <div className="grid grid-cols-[180px_1fr] gap-4 h-[calc(100%-70px)] min-h-[560px]">
                <aside className={`${panel} p-4`}>
                    <h2 className="font-heading font-bold mb-5">Explorer</h2>
                    {files.map((file) => <button key={file} type="button" className="block h-9 text-sm text-text-secondary">{file}</button>)}
                </aside>
                <div className="grid grid-rows-[1fr_180px] gap-4">
                    <div className={`${panel} p-5 overflow-hidden`}>
                        <h2 className="font-heading font-bold mb-4">App.jsx / Editor</h2>
                        <div className="font-mono text-xs leading-7 text-text-muted">
                            {Array.from({ length: 15 }, (_, index) => <div key={index}>{String(index + 1).padStart(2, "0")} &nbsp; // code line / function content</div>)}
                        </div>
                    </div>
                    <div className={`${panel} p-5`}>
                        <h2 className="font-heading font-bold mb-5">Terminal</h2>
                        <p className="font-mono text-sm">$ npm run dev</p>
                        <p className="mt-5 text-xs text-success">Server running · localhost:5173</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MeetingsView({ onOpenSheet }: Pick<Props, "onOpenSheet">) {
    // TODO: Replace with real data from backend
    const participants = ["Participant 1", "Participant 2", "Participant 3", "Participant 4"];
    return (
        <section>
            <PageHeading name="Video Meetings" />
            <div className="mb-4 flex justify-end">
                <button type="button" onClick={() => onOpenSheet("createMeeting")} className="h-10 px-4 rounded-input border border-vasto-blue/40 text-sm">Create a meeting</button>
            </div>
            <div className="grid lg:grid-cols-[1fr_260px] gap-4">
                <div className={`${panel} p-5`}>
                    <h2 className="font-heading font-bold mb-5">Team meeting · 4 participants</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {participants.map((participant) => (
                            <div key={participant} className="h-[150px] md:h-[190px] rounded-input border border-glass-border bg-surface/50 flex items-end p-3 text-sm">{participant}</div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-5">
                        {["Mute", "Camera", "Share", "Chat", "Leave"].map((action) => (
                            <button key={action} type="button" className="h-10 px-5 rounded-input border border-glass-border text-sm">{action}</button>
                        ))}
                    </div>
                </div>
                <aside className={`${panel} p-4`}>
                    <h2 className="font-heading font-bold mb-4">Participants</h2>
                    {participants.map((participant) => (
                        <div key={participant} className="h-14 flex items-center text-sm text-text-secondary border-b border-glass-border">
                            <span className="h-2 w-2 mr-3 rounded-full border border-vasto-cyan" />{participant}
                        </div>
                    ))}
                </aside>
            </div>
        </section>
    );
}

function ChatView({ onOpenSheet }: Pick<Props, "onOpenSheet">) {
    // TODO: Replace with real data from backend
    const channels = ["general", "development", "design", "random"];
    const messages = ["Message preview", "Project update attached", "Can we review this?", "The latest version is ready", "Thanks everyone"];
    return (
        <section>
            <PageHeading name="Group Chat" />
            <div className="grid grid-cols-[170px_1fr_210px] gap-4 min-h-[560px]">
                <aside className={`${panel} p-4`}>
                    <h2 className="font-heading font-bold mb-5">Channels</h2>
                    {channels.map((channel) => <button key={channel} type="button" className="block h-10 text-sm text-text-secondary"># {channel}</button>)}
                    <button type="button" className="mt-2 text-sm text-text-muted"><FontAwesomeIcon icon={faPlus} className="mr-2" />Create channel</button>
                    <button type="button" onClick={() => onOpenSheet("createChatServer")} className="mt-4 h-10 w-full rounded-input border border-vasto-blue/40 text-left px-3 text-xs">Create a chat server</button>
                </aside>
                <div className={`${panel} p-4 flex flex-col`}>
                    <h2 className="font-heading font-bold mb-4"># general</h2>
                    <div className="space-y-3 flex-1">
                        {messages.map((message, index) => (
                            <div key={message} className={`${panel} p-4 text-sm text-text-secondary`}><strong className="text-text-primary">Member {index + 1}</strong> · {message}</div>
                        ))}
                    </div>
                    <div className={`${panel} h-14 px-4 flex items-center`}>
                        <input placeholder="Type a message..." className="flex-1 bg-transparent outline-none text-sm" />
                        <FontAwesomeIcon icon={faPaperPlane} className="text-vasto-cyan" />
                    </div>
                </div>
                <aside className={`${panel} p-4`}>
                    <h2 className="font-heading font-bold mb-4">Members</h2>
                    {Array.from({ length: 5 }, (_, index) => (
                        <div key={index} className="h-14 flex items-center text-sm text-text-secondary border-b border-glass-border"><span className="h-2 w-2 mr-3 rounded-full border border-vasto-cyan" />Team member {index + 1}</div>
                    ))}
                </aside>
            </div>
        </section>
    );
}

function DocumentsView({ onOpenSheet }: Pick<Props, "onOpenSheet">) {
    const docs = ["Website brief", "Sprint notes", "Design guidelines", "Project proposal", "Meeting summary", "Research report", "Launch checklist"];
    // TODO: Replace mock document rows with real workspace documents
    return (
        <section>
            <PageHeading name="Documents" />
            <div className={`${panel} p-5`}>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-heading font-bold">My documents</h2>
                    <div className="flex gap-2">
                        <button type="button" onClick={() => onOpenSheet("uploadFiles")} className="h-10 px-4 rounded-input border border-glass-border text-sm">Upload files</button>
                        <button type="button" className="h-10 px-4 rounded-input border border-vasto-blue/40 text-sm">New document</button>
                    </div>
                </div>
                <div className="grid grid-cols-[1.4fr_1fr_1fr_100px] px-4 h-12 items-center rounded-input border border-glass-border text-xs text-text-muted mb-2">
                    <span>Name</span><span>Owner</span><span>Last edited</span><span>Progress</span>
                </div>
                {docs.map((doc, index) => (
                    <div key={doc} className={`${panel} grid grid-cols-[1.4fr_1fr_1fr_100px] px-4 h-14 items-center text-sm mb-2`}>
                        <span><FontAwesomeIcon icon={faFolder} className="mr-3 text-vasto-cyan" />{doc}</span>
                        <span className="text-text-muted">Team member</span>
                        <span className="text-text-muted">Recently</span>
                        <span className="h-2 rounded-full bg-vasto-blue" style={{ width: `${55 + (index % 3) * 15}%` }} />
                    </div>
                ))}
            </div>
        </section>
    );
}

function ProjectsView({ onOpenSheet }: Pick<Props, "onOpenSheet">) {
    const projects = [
        ["Website redesign", 68],
        ["AI chatbot", 54],
        ["Mobile app", 72],
        ["Team portal", 41],
    ];
    // TODO: Replace mock projects with real project records
    return (
        <section>
            <PageHeading name="Projects" />
            <div className="flex justify-end mb-4">
                <button type="button" onClick={() => onOpenSheet("createProject")} className="h-10 px-4 rounded-input border border-vasto-blue/40 text-sm">Create project</button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                {projects.map(([name, progress]) => (
                    <div key={String(name)} className={`${panel} p-5 h-180`}>
                        <h2 className="font-heading font-bold">{String(name)}</h2>
                        <p className="mt-8 text-sm text-text-muted">Project description / team</p>
                        <div className="mt-8 flex items-center gap-4">
                            <span className="text-xs text-text-muted">Progress</span>
                            <div className="h-2 flex-1 rounded-full bg-surface-tertiary"><div className="h-full rounded-full bg-vasto-blue" style={{ width: `${progress}%` }} /></div>
                        </div>
                        <div className="flex justify-end mt-6"><button type="button" className="h-9 px-4 rounded-input border border-glass-border text-sm">Open project</button></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function MoreView() {
    const tools = ["Task manager", "Calendar", "File storage", "Notifications", "Integrations", "Analytics", "Settings", "Custom apps"];
    const icons = [faFolder, faCalendar, faFolder, faBell, faShareNodes, faComments, faMicrophone, faCodeIcon];
    return (
        <section>
            <PageHeading name="More features" />
            <p className="text-sm text-text-muted mb-6">Add tools to your workspace as your team grows.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                    <div key={tool} className={`${panel} p-5 h-180`}>
                        <h2 className="font-heading font-bold">{tool}</h2>
                        <FontAwesomeIcon icon={icons[index] ?? faFolder} className="mt-6 h-10 w-10 rounded-lg bg-surface-tertiary p-3 text-vasto-cyan" />
                        <button type="button" className="mt-8 text-sm text-vasto-cyan">Open tool <FontAwesomeIcon icon={faArrowRight} className="ml-2" /></button>
                    </div>
                ))}
            </div>
        </section>
    );
}

const faCodeIcon = faCode;

export default function DashboardViews({ activeView, onOpenSheet }: Props): React.JSX.Element {
    if (activeView === "AI Assistant") return <AssistantView />;
    if (activeView === "Code Editor") return <CodeView />;
    if (activeView === "Video Meetings") return <MeetingsView onOpenSheet={onOpenSheet} />;
    if (activeView === "Group Chat") return <ChatView onOpenSheet={onOpenSheet} />;
    if (activeView === "Documents") return <DocumentsView onOpenSheet={onOpenSheet} />;
    if (activeView === "Projects") return <ProjectsView onOpenSheet={onOpenSheet} />;
    if (activeView === "More") return <MoreView />;
    return <HomeView onOpenSheet={onOpenSheet} />;
}
