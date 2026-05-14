// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Gamepad2, Pause, Play, RefreshCw, Settings } from "lucide-react";


export type PauseOverlayActionId = "play-1" | "leaderboard-2" | "controls-3" | "history-4" | "reset-session-5" | "button-6-6" | "button-7-7" | "button-8-8" | "resume-9" | "restart-10" | "quit-to-menu-11";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* BACKGROUND UI (Blurred by overlay) */}
      <div className="h-full w-full flex">
      {/* SideNavBar Shared Component */}
      <nav className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary fixed left-0 h-full w-64 border-r border-outline-variant/50 flat no shadows flex flex-col gap-stack-md p-panel-padding z-10">
      <div className="flex flex-col gap-1 mb-4">
      <div className="font-headline-md text-headline-md font-bold text-on-surface">GAME HUD</div>
      <div className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest">V.1.0.42-STABLE</div>
      </div>
      <div className="flex flex-col gap-2">
      {/* Active Nav: Play */}
      <button className="bg-secondary-container text-on-secondary-container rounded-lg font-bold flex items-center gap-3 px-4 py-3 w-full text-left opacity-80 scale-[0.98] transition-transform" type="button" data-action-id="play-1" onClick={actions?.["play-1"]}>
      <Gamepad2 aria-hidden={true} focusable="false" />
                          Play
                      </button>
      {/* Inactive Navs */}
      <button className="text-on-surface-variant hover:bg-surface-variant/30 flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg transition-colors duration-200" type="button" data-action-id="leaderboard-2" onClick={actions?.["leaderboard-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Leaderboard
                      </button>
      <button className="text-on-surface-variant hover:bg-surface-variant/30 flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg transition-colors duration-200" type="button" data-action-id="controls-3" onClick={actions?.["controls-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Controls
                      </button>
      <button className="text-on-surface-variant hover:bg-surface-variant/30 flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg transition-colors duration-200" type="button" data-action-id="history-4" onClick={actions?.["history-4"]}>
      <Circle aria-hidden={true} focusable="false" />
                          History
                      </button>
      </div>
      <div className="mt-auto w-full pt-4 border-t border-outline-variant/50">
      <button className="w-full h-touch-target border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors flex items-center justify-center font-status-label text-status-label tracking-widest uppercase" type="button" data-action-id="reset-session-5" onClick={actions?.["reset-session-5"]}>
                          RESET SESSION
                      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="ml-64 flex-1 flex flex-col h-full relative">
      {/* TopAppBar Shared Component */}
      <header className="bg-background dark:bg-background text-on-background dark:text-on-background docked full-width top-0 border-b border-outline-variant/50 flat no shadows flex justify-between items-center w-full px-gutter h-[80px] shrink-0">
      <div className="font-display-lg text-display-lg font-black tracking-tighter text-primary dark:text-primary truncate uppercase">
                          TETRIS SUPERVISOR
                      </div>
      <div className="flex gap-4 items-center">
      <button className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors duration-200" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors duration-200" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="h-touch-target w-touch-target flex items-center justify-center text-primary border-b-2 border-primary pb-1 scale-95 transition-transform" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Game Canvas Canvas */}
      <main className="flex-1 overflow-hidden p-8 flex items-center justify-center gap-12">
      {/* Mock HUD Left */}
      <div className="flex flex-col gap-stack-md w-32">
      <div className="bg-surface-container border border-outline-variant p-4 flex flex-col items-center">
      <span className="font-status-label text-status-label text-on-surface-variant mb-1 uppercase tracking-widest">HOLD</span>
      <div className="w-[80px] h-[80px] bg-surface grid grid-cols-4 grid-rows-4 gap-[1px] p-[1px] border border-outline-variant/30">
      {/* Empty mock grid */}
      <div className="bg-surface-container-highest col-start-2 col-span-2 row-start-2 row-span-2"></div>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant p-4 flex flex-col items-center">
      <span className="font-status-label text-status-label text-on-surface-variant mb-1 uppercase tracking-widest">SCORE</span>
      <span className="font-data-mono text-data-mono text-primary">042,910</span>
      </div>
      </div>
      {/* Mock Playfield */}
      <div className="w-[320px] h-[640px] bg-surface border border-outline-variant relative grid grid-cols-10 grid-rows-20">
      {/* Grid lines simulation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
      {/* Mock Blocks */}
      <div className="row-start-20 col-start-1 col-span-4 bg-surface-container-highest border border-outline-variant shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
      <div className="row-start-20 col-start-6 col-span-5 bg-surface-container-highest border border-outline-variant shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
      <div className="row-start-19 col-start-2 col-span-3 bg-surface-container-highest border border-outline-variant shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
      </div>
      {/* Mock HUD Right */}
      <div className="flex flex-col gap-stack-md w-32">
      <div className="bg-surface-container border border-outline-variant p-4 flex flex-col items-center">
      <span className="font-status-label text-status-label text-on-surface-variant mb-1 uppercase tracking-widest">NEXT</span>
      <div className="w-[80px] h-[80px] bg-surface grid grid-cols-4 grid-rows-4 gap-[1px] p-[1px] border border-outline-variant/30">
      <div className="bg-surface-container-highest col-start-1 col-span-4 row-start-2 row-span-1"></div>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant p-4 flex flex-col items-center">
      <span className="font-status-label text-status-label text-on-surface-variant mb-1 uppercase tracking-widest">LEVEL</span>
      <span className="font-data-mono text-data-mono text-primary">08</span>
      </div>
      <div className="bg-surface-container border border-outline-variant p-4 flex flex-col items-center mt-auto">
      <span className="font-status-label text-status-label text-on-surface-variant mb-1 uppercase tracking-widest">LINES</span>
      <span className="font-data-mono text-data-mono text-primary">042</span>
      </div>
      </div>
      </main>
      </div>
      </div>
      {/* PAUSE OVERLAY */}
      {/* Level 2 Overlay: 70% opacity backdrop blur (12px) of background color */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-[12px]">
      {/* Center Modal */}
      <div className="bg-surface-container border border-outline-variant p-10 rounded-xl flex flex-col items-center gap-8 w-full max-w-md shadow-2xl relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary/20 blur-md"></div>
      {/* Header */}
      <div className="text-center flex flex-col gap-2">
      <h1 className="font-display-lg text-display-lg text-primary uppercase tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                          PAUSED
                      </h1>
      <p className="font-status-label text-status-label text-on-surface-variant tracking-[0.2em] uppercase">
                          Session Suspended
                      </p>
      </div>
      {/* Stats Module */}
      <div className="w-full flex justify-center gap-12 py-6 border-y border-outline-variant/50 bg-surface/50">
      <div className="flex flex-col items-center gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant tracking-widest uppercase">SCORE</span>
      <span className="font-data-mono text-[28px] leading-[32px] font-semibold text-primary">042,910</span>
      </div>
      <div className="w-px h-full bg-outline-variant/50"></div>
      <div className="flex flex-col items-center gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant tracking-widest uppercase">LEVEL</span>
      <span className="font-data-mono text-[28px] leading-[32px] font-semibold text-primary">08</span>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-4 mt-2">
      {/* Primary Action: Resume */}
      <button className="group relative h-[56px] w-full flex items-center justify-center border-2 border-primary bg-primary/5 text-primary font-headline-md text-headline-md uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="resume-9" onClick={actions?.["resume-9"]}>
      <span className="relative z-10 flex items-center gap-2">
      <Play aria-hidden={true} focusable="false" />
                              RESUME
                          </span>
      <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      {/* Secondary Action: Restart */}
      <button className="h-touch-target w-full flex items-center justify-center border border-outline-variant bg-surface text-on-surface font-body-base text-body-base uppercase tracking-wider hover:bg-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background gap-2" type="button" data-action-id="restart-10" onClick={actions?.["restart-10"]}>
      <RefreshCw className="text-[20px]" aria-hidden={true} focusable="false" />
                          RESTART
                      </button>
      {/* Tertiary Action: Quit */}
      <button className="h-touch-target w-full flex items-center justify-center border border-transparent bg-transparent text-error font-body-base text-body-base uppercase tracking-wider hover:bg-error/10 hover:border-error/30 transition-colors focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-4 focus:ring-offset-background mt-2 gap-2" type="button" data-action-id="quit-to-menu-11" onClick={actions?.["quit-to-menu-11"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                          QUIT TO MENU
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
