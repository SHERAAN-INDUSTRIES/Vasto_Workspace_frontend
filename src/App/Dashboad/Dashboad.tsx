import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import Sidebar, { type WorkspaceView } from "./sidebar/Sidebar";
import DashboardViews, { type BottomSheetType } from "./DashboardViews";
import BottomSheet from "../Components/BottomSheet";
import img from "../../assets/Earth.jpeg";

function SheetPlaceholder({ title }: { title: string }): React.JSX.Element {
    return (
        <div className="py-2">
            <h2 className="font-heading text-lg font-bold">{title} — placeholder content</h2>
            <p className="mt-2 text-sm text-text-muted">
                Replace this with the {title.toLowerCase()} experience.
            </p>
        </div>
    );
}

// TODO: Developer to replace these placeholder elements with real bottom sheet content per trigger.
const bottomSheetContent: Record<BottomSheetType, React.ReactElement> = {
    uploadFiles: <SheetPlaceholder title="Upload files" />,
    createMeeting: <SheetPlaceholder title="Create a meeting" />,
    createChatServer: <SheetPlaceholder title="Create a chat server" />,
    createProject: <SheetPlaceholder title="Create project" />,
};

function Dashboard(): React.JSX.Element {
    const [activeView, setActiveView] = useState<WorkspaceView>("Home");
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
    const [activeSheetType, setActiveSheetType] = useState<BottomSheetType | null>(null);

    function navigate(view: WorkspaceView) {
        setActiveView(view);
        setNavigationOpen(false);
    }

    const openBottomSheet = useCallback((type: BottomSheetType) => {
        setActiveSheetType(type);
        setBottomSheetOpen(true);
    }, []);

    const closeBottomSheet = useCallback(() => {
        setBottomSheetOpen(false);
        setActiveSheetType(null);
    }, []);

    return (
        <section className="h-dvh w-dvw bg-[#050a16] flex gap-2 p-2 overflow-hidden text-text-primary">
            <aside className="hidden md:block h-full w-[220px] shrink-0">
                <Sidebar activeView={activeView} onNavigate={navigate} />
            </aside>
            {navigationOpen && (
                <aside className="absolute inset-y-2 left-2 z-50 h-[calc(100%-16px)] w-[220px] md:hidden">
                    <Sidebar activeView={activeView} onNavigate={navigate} />
                </aside>
            )}

            <main className="min-w-0 h-full flex-1 flex flex-col gap-2">
                <header className="h-[68px] shrink-0 rounded-panel border border-glass-border bg-glass/70 px-4 flex items-center gap-4">
                    <button
                        type="button"
                        className="md:hidden h-10 w-10 rounded-input border border-glass-border"
                        aria-label="Open navigation"
                        onClick={() => setNavigationOpen((open) => !open)}
                    >
                        =
                    </button>
                    <label className="relative flex-1 max-w-[520px]">
                        <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                        <input
                            type="search"
                            placeholder="Search anything..."
                            className="h-11 w-full rounded-input border border-glass-border bg-[#0b1428] pl-11 pr-4 text-sm text-text-primary outline-none focus:border-vasto-blue"
                        />
                    </label>
                    <div className="ml-auto flex items-center gap-3">
                        <button type="button" className="h-10 w-10 rounded-full border border-glass-border text-text-secondary">
                            <FontAwesomeIcon icon={faBell} />
                        </button>
                        <img src={img} alt="Profile" className="h-10 w-10 rounded-full border border-glass-border object-cover" />
                    </div>
                </header>

                <div className="min-h-0 flex-1 overflow-y-auto scrollbar-none">
                    <DashboardViews activeView={activeView} onOpenSheet={openBottomSheet} />
                </div>
            </main>
            <BottomSheet isOpen={bottomSheetOpen} onClose={closeBottomSheet} ariaLabel="Workspace action">
                {activeSheetType ? bottomSheetContent[activeSheetType] : null}
            </BottomSheet>
        </section>
    );
}

export default Dashboard;