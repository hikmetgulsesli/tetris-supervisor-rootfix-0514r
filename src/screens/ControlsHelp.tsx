// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, Gamepad2, Info, MousePointerClick, Pause, Settings, X } from "lucide-react";


export type ControlsHelpActionId = "reset-session-1" | "button-2-2" | "button-3-3" | "button-4-4" | "close-5";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* SideNavBar (from JSON) */}
      <nav className="hidden md:flex flex-col bg-surface-container dark:bg-surface-container text-primary dark:text-primary fixed left-0 h-full w-64 border-r border-outline-variant/50 p-panel-padding z-20">
      <div className="mb-12">
      <div className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mb-1">GAME HUD</div>
      <div className="font-status-label text-status-label text-on-surface-variant">V.1.0.42-STABLE</div>
      </div>
      <div className="flex-1 flex flex-col gap-stack-sm">
      {/* Inactive */}
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/30 hover:text-primary transition-colors duration-200" href="#">
      <Gamepad2 aria-hidden={true} focusable="false" />
      <span className="font-data-mono text-data-mono uppercase tracking-wide text-sm">Play</span>
      </a>
      {/* Inactive */}
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/30 hover:text-primary transition-colors duration-200" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-data-mono text-data-mono uppercase tracking-wide text-sm">Leaderboard</span>
      </a>
      {/* Active (Semantic match: Controls) */}
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold opacity-80 scale-[0.98] transition-transform" href="#">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-data-mono text-data-mono uppercase tracking-wide text-sm">Controls</span>
      </a>
      {/* Inactive */}
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/30 hover:text-primary transition-colors duration-200" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-data-mono text-data-mono uppercase tracking-wide text-sm">History</span>
      </a>
      </div>
      <div className="mt-auto pt-8">
      <button className="w-full flex justify-center items-center h-touch-target border border-error text-error hover:bg-error/10 font-status-label text-status-label rounded-DEFAULT transition-colors" type="button" data-action-id="reset-session-1" onClick={actions?.["reset-session-1"]}>
                      RESET SESSION
                  </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col md:ml-64 relative min-w-0 h-full overflow-hidden">
      {/* TopAppBar (from JSON) */}
      <header className="bg-background dark:bg-background text-on-background dark:text-on-background full-width top-0 border-b border-outline-variant/50 flex justify-between items-center w-full px-gutter h-[64px] flex-shrink-0 z-10">
      <div className="font-display-lg text-[24px] font-black tracking-tighter text-primary dark:text-primary uppercase leading-none">
                      TETRIS SUPERVISOR
                  </div>
      <div className="flex items-center gap-4">
      <button aria-label="settings" className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="help" className="text-primary border-b-2 border-primary pb-1 p-2" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="pause" className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-gutter md:p-panel-padding pb-32">
      {/* Controls Overlay Panel (Bento Grid) */}
      <div className="max-w-5xl mx-auto">
      {/* Action Header */}
      <div className="flex justify-between items-end mb-8 border-b border-outline-variant/30 pb-4">
      <div>
      <h1 className="font-display-lg text-[32px] md:text-display-lg text-primary tracking-tight uppercase">System Parameters</h1>
      <p className="font-status-label text-status-label text-on-surface-variant mt-2">INPUT MAPPINGS &amp; LOGIC RULES</p>
      </div>
      <button className="h-touch-target px-6 flex items-center gap-2 bg-primary text-on-primary font-status-label text-status-label rounded-sm hover:bg-tertiary-container transition-colors active:scale-95" type="button" data-action-id="close-5" onClick={actions?.["close-5"]}>
      <X className="text-[18px]" aria-hidden={true} focusable="false" />
                              CLOSE
                          </button>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-md">
      {/* Keyboard Mapping Card (Spans 8 cols) */}
      <div className="md:col-span-8 bg-surface-container border border-outline-variant/50 rounded-lg p-panel-padding flex flex-col relative overflow-hidden group">
      {/* Decorative background grid element */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
      <h2 className="font-data-mono text-data-mono text-primary mb-8 flex items-center gap-2 relative z-10">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" />
                                  PHYSICAL INPUT MAPPING
                              </h2>
      <div className="flex-1 flex flex-col items-center justify-center gap-12 relative z-10">
      {/* Arrow Keys Group */}
      <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center mb-2">
      <div className="w-12 h-12 border-2 border-outline-variant rounded flex items-center justify-center bg-surface-container-high text-on-surface-variant shadow-[0_4px_0_0_#1c1b1b]">
      <ArrowUp aria-hidden={true} focusable="false" />
      </div>
      <div className="ml-4 flex items-center font-status-label text-status-label text-secondary">HARD DROP</div>
      </div>
      <div className="flex gap-2">
      <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 border-2 border-outline-variant rounded flex items-center justify-center bg-surface-container-high text-on-surface-variant shadow-[0_4px_0_0_#1c1b1b]">
      <ArrowLeft aria-hidden={true} focusable="false" />
      </div>
      <span className="font-status-label text-status-label text-on-surface-variant">MOVE L</span>
      </div>
      <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 border-2 border-primary rounded flex items-center justify-center bg-primary/10 text-primary shadow-[0_4px_0_0_#444749] ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
      <ArrowDown aria-hidden={true} focusable="false" />
      </div>
      <span className="font-status-label text-status-label text-primary">SOFT DROP</span>
      </div>
      <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 border-2 border-outline-variant rounded flex items-center justify-center bg-surface-container-high text-on-surface-variant shadow-[0_4px_0_0_#1c1b1b]">
      <ArrowRight aria-hidden={true} focusable="false" />
      </div>
      <span className="font-status-label text-status-label text-on-surface-variant">MOVE R</span>
      </div>
      </div>
      </div>
      {/* Action Keys */}
      <div className="flex gap-8 w-full justify-center">
      <div className="flex flex-col items-center gap-2 w-48">
      <div className="w-full h-12 border-2 border-outline-variant rounded flex items-center justify-center bg-surface-container-high text-on-surface-variant shadow-[0_4px_0_0_#1c1b1b]">
      <span className="font-data-mono text-sm tracking-widest">SPACE</span>
      </div>
      <span className="font-status-label text-status-label text-secondary">HOLD PIECE</span>
      </div>
      <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 border-2 border-outline-variant rounded flex items-center justify-center bg-surface-container-high text-on-surface-variant shadow-[0_4px_0_0_#1c1b1b]">
      <span className="font-data-mono text-sm">P</span>
      </div>
      <span className="font-status-label text-status-label text-on-surface-variant">PAUSE</span>
      </div>
      </div>
      </div>
      </div>
      {/* Touch Gestures Card (Spans 4 cols) */}
      <div className="md:col-span-4 bg-surface-container border border-outline-variant/50 rounded-lg p-panel-padding flex flex-col">
      <h2 className="font-data-mono text-data-mono text-primary mb-6 flex items-center gap-2">
      <MousePointerClick className="text-secondary" aria-hidden={true} focusable="false" />
                                  TOUCH LOGIC
                              </h2>
      <div className="flex-1 flex flex-col gap-6">
      <div className="flex items-center gap-4 bg-surface-container-high p-3 rounded border border-outline-variant/30">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-status-label text-status-label text-primary">SWIPE HORIZONTAL</div>
      <div className="text-xs text-on-surface-variant mt-1">Move Tetromino</div>
      </div>
      </div>
      <div className="flex items-center gap-4 bg-surface-container-high p-3 rounded border border-outline-variant/30">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-status-label text-status-label text-primary">SWIPE DOWN</div>
      <div className="text-xs text-on-surface-variant mt-1">Soft Drop</div>
      </div>
      </div>
      <div className="flex items-center gap-4 bg-surface-container-high p-3 rounded border border-outline-variant/30">
      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
      <MousePointerClick aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-status-label text-status-label text-primary">SINGLE TAP</div>
      <div className="text-xs text-secondary mt-1">Rotate 90° Clockwise</div>
      </div>
      </div>
      </div>
      </div>
      {/* Scoring Rules Card (Spans 12 cols) */}
      <div className="md:col-span-12 bg-surface-container border border-outline-variant/50 rounded-lg p-panel-padding flex flex-col mt-4">
      <h2 className="font-data-mono text-data-mono text-primary mb-6 flex items-center gap-2">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" />
                                  CLEARANCE MULTIPLIERS
                              </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-surface-container-lowest border-l-2 border-outline-variant p-4">
      <div className="font-status-label text-status-label text-on-surface-variant mb-1">SINGLE LINE</div>
      <div className="font-data-mono text-[24px] text-primary">100<span className="text-sm text-on-surface-variant ml-1">pts</span></div>
      </div>
      <div className="bg-surface-container-lowest border-l-2 border-secondary p-4">
      <div className="font-status-label text-status-label text-secondary mb-1">DOUBLE LINE</div>
      <div className="font-data-mono text-[24px] text-primary">300<span className="text-sm text-on-surface-variant ml-1">pts</span></div>
      </div>
      <div className="bg-surface-container-lowest border-l-2 border-primary-container p-4">
      <div className="font-status-label text-status-label text-primary-container mb-1">TRIPLE LINE</div>
      <div className="font-data-mono text-[24px] text-primary">500<span className="text-sm text-on-surface-variant ml-1">pts</span></div>
      </div>
      <div className="bg-surface-container-highest border-l-4 border-primary p-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <div className="font-status-label text-status-label text-primary mb-1 flex items-center gap-1">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" /> TETRIS
                                      </div>
      <div className="font-data-mono text-[24px] text-primary font-bold">800<span className="text-sm text-primary/70 ml-1">pts</span></div>
      </div>
      </div>
      <div className="mt-6 text-sm text-on-surface-variant border-t border-outline-variant/30 pt-4 flex items-start gap-2">
      <Info className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
      <p>Points scale exponentially based on current level multiplier. Soft drops award 1pt per cell. Hard drops award 2pts per cell. Successive line clears engage combo multiplier.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Footer (from JSON) */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest text-on-surface-variant dark:text-on-surface-variant font-status-label text-status-label docked full-width bottom-0 border-t border-outline-variant/50 flex justify-between items-center px-gutter py-2 w-full absolute bottom-0 z-10">
      <div>
                      © 2024 GRID LOGIC SYSTEMS. ALL RIGHTS RESERVED.
                  </div>
      <div className="flex gap-4">
      <a className="text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity" href="#">Privacy</a>
      <a className="text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity" href="#">Terms</a>
      <a className="text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity" href="#">Support</a>
      </div>
      </footer>
      </main>
    </>
  );
}
