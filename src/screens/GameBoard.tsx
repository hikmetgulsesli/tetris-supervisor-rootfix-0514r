// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, Gamepad2, Pause, RotateCw, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "reset-session-4" | "button-5-5" | "button-6-6" | "button-7-7" | "button-8-8" | "button-9-9" | "button-10-10";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-background dark:bg-background text-on-background dark:text-on-background docked full-width top-0 border-b border-outline-variant/50 flex justify-between items-center w-full px-gutter h-touch-target z-50">
      <div className="flex items-center gap-4">
      <span className="font-display-lg text-headline-md font-black tracking-tighter text-primary dark:text-primary leading-none">TETRIS SUPERVISOR</span>
      </div>
      <div className="flex items-center gap-2">
      <button aria-label="settings" className="w-touch-target h-touch-target flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="help" className="w-touch-target h-touch-target flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="pause" className="w-touch-target h-touch-target flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col gap-stack-md p-panel-padding bg-surface-container dark:bg-surface-container text-primary dark:text-primary border-r border-outline-variant/50 w-64 h-full shrink-0 z-40">
      <div className="mb-8">
      <h2 className="font-headline-md text-headline-md font-bold text-on-surface uppercase tracking-tight">GAME HUD</h2>
      <p className="font-status-label text-status-label text-on-surface-variant mt-1">V.1.0.42-STABLE</p>
      </div>
      <div className="flex flex-col gap-2">
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold opacity-80 scale-[0.98]" href="#">
      <Gamepad2 aria-hidden={true} focusable="false" />
      <span className="font-body-base text-body-base uppercase tracking-wider">Play</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-lg transition-colors duration-200 uppercase tracking-wider" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-base text-body-base">Leaderboard</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-lg transition-colors duration-200 uppercase tracking-wider" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-base text-body-base">Controls</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-lg transition-colors duration-200 uppercase tracking-wider" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-base text-body-base">History</span>
      </a>
      </div>
      <div className="mt-auto">
      <button className="w-full border border-outline text-primary font-status-label text-status-label py-3 rounded uppercase tracking-widest hover:bg-surface-variant transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="reset-session-4" onClick={actions?.["reset-session-4"]}>
                          RESET SESSION
                      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex justify-center items-center p-gutter overflow-y-auto relative bg-[#0F172A]">
      {/* Game Container */}
      <div className="flex gap-stack-md flex-col md:flex-row items-center md:items-start">
      {/* Left HUD (Hold) - Visible mainly on desktop for balance */}
      <div className="hidden lg:flex flex-col gap-stack-md w-32 shrink-0">
      <div className="bg-surface-container border border-outline-variant p-4 rounded text-center">
      <h3 className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest mb-4">Hold</h3>
      <div className="w-[96px] h-[96px] mx-auto mini-grid-bg relative border border-outline-variant/30">
      {/* Held Piece (I) */}
      <div className="absolute top-[24px] left-[0px] w-[24px] h-[24px] t-cyan"></div>
      <div className="absolute top-[24px] left-[24px] w-[24px] h-[24px] t-cyan"></div>
      <div className="absolute top-[24px] left-[48px] w-[24px] h-[24px] t-cyan"></div>
      <div className="absolute top-[24px] left-[72px] w-[24px] h-[24px] t-cyan"></div>
      </div>
      </div>
      </div>
      {/* Playfield */}
      <div className="bg-surface-container border border-outline-variant p-2 rounded shadow-2xl relative">
      {/* 10x20 Grid */}
      <div className="w-[320px] h-[640px] bg-[#0F172A] grid-bg relative border border-outline-variant/50 overflow-hidden">
      {/* Static Blocks */}
      {/* Row 19 */}
      <div className="absolute top-[608px] left-[0px] w-[32px] h-[32px] t-blue"></div>
      <div className="absolute top-[608px] left-[32px] w-[32px] h-[32px] t-blue"></div>
      <div className="absolute top-[608px] left-[64px] w-[32px] h-[32px] t-blue"></div>
      <div className="absolute top-[576px] left-[0px] w-[32px] h-[32px] t-blue"></div>
      <div className="absolute top-[608px] left-[128px] w-[32px] h-[32px] t-yellow"></div>
      <div className="absolute top-[608px] left-[160px] w-[32px] h-[32px] t-yellow"></div>
      <div className="absolute top-[576px] left-[128px] w-[32px] h-[32px] t-yellow"></div>
      <div className="absolute top-[576px] left-[160px] w-[32px] h-[32px] t-yellow"></div>
      <div className="absolute top-[608px] left-[224px] w-[32px] h-[32px] t-red"></div>
      <div className="absolute top-[608px] left-[256px] w-[32px] h-[32px] t-red"></div>
      <div className="absolute top-[576px] left-[256px] w-[32px] h-[32px] t-red"></div>
      <div className="absolute top-[576px] left-[288px] w-[32px] h-[32px] t-red"></div>
      {/* Active Piece (T) */}
      <div className="absolute top-[128px] left-[128px] w-[32px] h-[32px] t-purple"></div>
      <div className="absolute top-[160px] left-[96px] w-[32px] h-[32px] t-purple"></div>
      <div className="absolute top-[160px] left-[128px] w-[32px] h-[32px] t-purple"></div>
      <div className="absolute top-[160px] left-[160px] w-[32px] h-[32px] t-purple"></div>
      {/* Ghost Piece */}
      <div className="absolute top-[544px] left-[128px] w-[32px] h-[32px] t-ghost"></div>
      <div className="absolute top-[576px] left-[96px] w-[32px] h-[32px] t-ghost"></div>
      <div className="absolute top-[576px] left-[128px] w-[32px] h-[32px] t-ghost"></div>
      <div className="absolute top-[576px] left-[160px] w-[32px] h-[32px] t-ghost"></div>
      </div>
      </div>
      {/* Right HUD Panels */}
      <div className="flex flex-row md:flex-col gap-stack-md w-full md:w-48 shrink-0">
      {/* Stats Grid */}
      <div className="bg-surface-container border border-outline-variant p-4 rounded flex-1 md:flex-none">
      <div className="flex flex-col gap-4">
      <div>
      <h3 className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest">Score</h3>
      <div className="font-data-mono text-headline-md text-primary mt-1">042,910</div>
      </div>
      <div className="h-px bg-outline-variant/30 w-full"></div>
      <div>
      <h3 className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest">Level</h3>
      <div className="font-data-mono text-headline-md text-primary mt-1">12</div>
      </div>
      <div className="h-px bg-outline-variant/30 w-full"></div>
      <div>
      <h3 className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest">Lines</h3>
      <div className="font-data-mono text-headline-md text-primary mt-1">104</div>
      </div>
      </div>
      </div>
      {/* Next Piece */}
      <div className="bg-surface-container border border-outline-variant p-4 rounded text-center flex-1 md:flex-none">
      <h3 className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest mb-4">Next</h3>
      <div className="w-[96px] h-[96px] mx-auto mini-grid-bg relative border border-outline-variant/30">
      {/* Next Piece (S) */}
      <div className="absolute top-[24px] left-[24px] w-[24px] h-[24px] t-green"></div>
      <div className="absolute top-[24px] left-[48px] w-[24px] h-[24px] t-green"></div>
      <div className="absolute top-[48px] left-[0px] w-[24px] h-[24px] t-green"></div>
      <div className="absolute top-[48px] left-[24px] w-[24px] h-[24px] t-green"></div>
      </div>
      </div>
      {/* Next Next Piece (Smaller) */}
      <div className="bg-surface-container border border-outline-variant p-2 rounded text-center hidden md:block">
      <div className="w-[72px] h-[72px] mx-auto relative opacity-60">
      {/* L Piece */}
      <div className="absolute top-[18px] left-[36px] w-[18px] h-[18px] bg-[#f97316] border border-white"></div>
      <div className="absolute top-[36px] left-[0px] w-[18px] h-[18px] bg-[#f97316] border border-white"></div>
      <div className="absolute top-[36px] left-[18px] w-[18px] h-[18px] bg-[#f97316] border border-white"></div>
      <div className="absolute top-[36px] left-[36px] w-[18px] h-[18px] bg-[#f97316] border border-white"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Mobile Controls (Visible only on smaller screens for touch) */}
      <div className="absolute bottom-4 left-0 w-full px-gutter md:hidden flex justify-between items-end gap-4 pointer-events-none">
      {/* D-Pad Left */}
      <div className="flex flex-col gap-2 pointer-events-auto">
      <button className="w-16 h-16 bg-surface-container/80 border border-outline-variant rounded-full flex items-center justify-center text-primary active:bg-surface-variant backdrop-blur-md" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <RotateCw  style={{fontSize: "32px"}} aria-hidden={true} focusable="false" />
      </button>
      <div className="grid grid-cols-3 gap-1 mt-2">
      <div></div>
      <button className="w-12 h-12 bg-surface-container/80 border border-outline-variant rounded flex items-center justify-center text-primary active:bg-surface-variant backdrop-blur-md" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <ArrowUp aria-hidden={true} focusable="false" />
      </button>
      <div></div>
      <button className="w-12 h-12 bg-surface-container/80 border border-outline-variant rounded flex items-center justify-center text-primary active:bg-surface-variant backdrop-blur-md" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <button className="w-12 h-12 bg-surface-container/80 border border-outline-variant rounded flex items-center justify-center text-primary active:bg-surface-variant backdrop-blur-md" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <ArrowDown aria-hidden={true} focusable="false" />
      </button>
      <button className="w-12 h-12 bg-surface-container/80 border border-outline-variant rounded flex items-center justify-center text-primary active:bg-surface-variant backdrop-blur-md" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}>
      <ArrowRight aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Action Right */}
      <div className="pointer-events-auto pb-4">
      <button className="w-20 h-20 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center text-primary active:bg-primary/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.3)]" type="button" data-action-id="button-10-10" onClick={actions?.["button-10-10"]}>
      <ArrowDown  style={{fontSize: "40px"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </main>
      </div>
      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest text-on-surface-variant dark:text-on-surface-variant font-status-label text-status-label docked full-width bottom-0 border-t border-outline-variant/50 flex justify-between items-center px-gutter py-2 w-full z-50">
      <div className="opacity-60">© 2024 GRID LOGIC SYSTEMS. ALL RIGHTS RESERVED.</div>
      <div className="flex gap-4">
      <a className="text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity uppercase" href="#">Privacy</a>
      <a className="text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity uppercase" href="#">Terms</a>
      <a className="text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity uppercase" href="#">Support</a>
      </div>
      </footer>
    </>
  );
}
