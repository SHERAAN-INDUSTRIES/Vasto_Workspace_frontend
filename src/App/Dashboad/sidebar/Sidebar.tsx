import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faRobot, faCode, faVideo, faComments, faFileLines, faFolder, faEllipsis, faDollar } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/brand/vasto-transparent.png";

export type WorkspaceView = "Home" | "AI Assistant" | "Code Editor" | "Video Meetings" | "Group Chat" | "Documents" | "Projects" | "More";

type SidebarProps = {
    activeView: WorkspaceView;
    onNavigate: (view: WorkspaceView) => void;
};

const navItems: Array<{ label: WorkspaceView; icon: typeof faHouse }> = [
    { label: "Home", icon: faHouse },
    { label: "AI Assistant", icon: faRobot },
    { label: "Code Editor", icon: faCode },
    { label: "Video Meetings", icon: faVideo },
    { label: "Group Chat", icon: faComments },
    { label: "Documents", icon: faFileLines },
    { label: "Projects", icon: faFolder },
    { label: "More", icon: faEllipsis },
];

function Sidebar({ activeView, onNavigate }: SidebarProps): React.JSX.Element {
    return (
        <div className="h-full rounded-panel border border-glass-border bg-glass/75 p-3 flex flex-col">
            <div className="h-[68px] flex items-center gap-3 px-2">
                <img src={logo} alt="Vasto" className="h-10 w-10" />
                <div>
                    <h1 className="font-heading text-lg font-bold">VASTO</h1>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-vasto-cyan">Workspace</p>
                </div>
            </div>
            <div className="h-px bg-glass-border mx-2 mb-3" />

            <nav className="flex-1 space-y-1">
                {navItems.map(({ label, icon }) => (
                    <button
                        key={label}
                        type="button"
                        onClick={() => onNavigate(label)}
                        className={`w-full h-11 px-3 rounded-input flex items-center gap-3 text-sm transition-colors ${
                            activeView === label
                                ? "border border-vasto-blue/50 bg-vasto-blue/20 text-white"
                                : "border border-transparent text-text-secondary hover:bg-surface-tertiary hover:text-white"
                        }`}
                    >
                        <FontAwesomeIcon icon={icon} className="w-4" />
                        <span>{label}</span>
                    </button>
                ))}
            </nav>

            <div className="mt-auto rounded-input border border-glass-border bg-[#09142a] p-3">
                <p className="text-sm font-semibold">Pro workspace</p>
                <p className="mt-1 text-[11px] leading-relaxed text-text-muted">Unlock AI agents, unlimited documents and team groups.</p>
                <button type="button" className="mt-3 h-9 w-full rounded-input bg-vasto-blue/15 border border-vasto-blue/30 text-sm">
                    <FontAwesomeIcon icon={faDollar} className="mr-2" /> Upgrade now
                </button>
            </div>
        </div>
    );
}

export default Sidebar;